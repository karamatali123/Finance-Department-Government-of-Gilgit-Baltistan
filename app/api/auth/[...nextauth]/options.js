import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

// Create a single instance of PrismaClient
const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions = {
  adapter: PrismaAdapter(prisma), // This connects NextAuth with your Prisma models
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
      httpOptions: {
        timeout: 40000,
        retry: 3,
        keepAlive: true,
      },
    }),
    EmailProvider({
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { from },
      }) {
        if (!process.env.RESEND_API_KEY) {
          console.error("RESEND_API_KEY is missing");
          throw new Error("RESEND_API_KEY is missing");
        }

        try {
          console.log("Attempting to send email to:", email);
          console.log("Verification URL:", url);

          const result = await resend.emails.send({
            from: "noreply@gbfinance.gov.pk",
            to: email,
            subject: "Sign in to GB Finance Department",
            html: `<p>Please click the link below to sign in:</p>
                   <p><a href="${url}">Sign in to GB Finance Department</a></p>
                   <p>If you didn't request this email, you can safely ignore it.</p>`,
          });

          console.log("Email send result:", result);

          if (!result || result.error) {
            console.error(
              "Resend API error:",
              result?.error || "No result returned"
            );
            throw new Error("Failed to send email");
          }
        } catch (error) {
          console.error("Detailed error:", error);
          throw new Error("Failed to send verification email");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      try {
        console.log("Redirect validation:", { url, baseUrl });

        // Ensure redirects only go to gbfinance.gov.pk domains
        const allowedDomains = [
          "https://gbfinance.gov.pk",
          "http://localhost:3000", // for development
        ];

        // If it's a relative URL, append it to the base URL
        if (url.startsWith("/")) {
          return `${baseUrl}${url}`;
        }

        // Check if the URL is for an allowed domain
        if (allowedDomains.some((domain) => url.startsWith(domain))) {
          return url;
        }

        // Default to home page if URL is not allowed
        return baseUrl;
      } catch (error) {
        console.error("Redirect error:", error);
        return baseUrl;
      }
    },
    async signIn({ user, account, profile }) {
      try {
        // Log the sign-in attempt details
        console.log("Sign-in attempt for gbfinance.gov.pk:", {
          email: user?.email,
          provider: account?.provider,
          emailVerified: profile?.email_verified,
        });

        if (account?.provider === "google") {
          // Verify the user's email is verified by Google
          if (!profile?.email_verified) {
            console.error("Email not verified by Google");
            return "/auth/error?error=EmailNotVerified";
          }

          try {
            const existingUser = await prisma.user.findUnique({
              where: { email: profile.email },
              include: { accounts: true },
            });

            if (!existingUser) {
              return true; // Let NextAuth create the user
            }

            // If user exists but doesn't have a Google account linked
            if (
              !existingUser.accounts.some((acc) => acc.provider === "google")
            ) {
              await prisma.account.create({
                data: {
                  userId: existingUser.id,
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                },
              });
            }
            return true;
          } catch (dbError) {
            console.error("Database operation failed:", dbError);
            return "/auth/error?error=DatabaseError";
          }
        }

        // For email provider or other providers
        return true;
      } catch (error) {
        console.error("Sign-in error for gbfinance.gov.pk:", error);
        return "/auth/error?error=SignInFailed";
      }
    },
  },
  events: {
    async signIn(message) {
      // Log successful sign-ins
      console.log("User signed in:", message);
    },
    async createUser(message) {
      console.log("New user created:", message);
    },
    async signOut(message) {
      // Clean up the session and tokens with timeout
      try {
        const cleanupPromise = async () => {
          if (message?.account?.provider === "google") {
            await prisma.account.deleteMany({
              where: {
                userId: message.user.id,
                provider: "google",
              },
            });
          }
        };

        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Cleanup timeout")), 10000)
        );

        await Promise.race([cleanupPromise(), timeoutPromise]);
        console.log("User signed out:", message);
      } catch (error) {
        console.error("Sign out cleanup error:", error);
      }
    },
    async session(message) {
      // Log session events for debugging

      console.log("Session event:", message);
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    verifyRequest: "/auth/verifyRequest",
  },
  debug: process.env.NODE_ENV === "development",
  logger: {
    error: (code, ...message) => {
      console.error(code, ...message);
    },
    warn: (code, ...message) => {
      console.warn(code, ...message);
    },
    debug: (code, ...message) => {
      console.debug(code, ...message);
    },
  },
};
