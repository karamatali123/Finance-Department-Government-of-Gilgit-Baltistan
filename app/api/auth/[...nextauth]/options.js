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
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      httpOptions: {
        timeout: 10000,
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
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      try {
        console.log("Redirect attempt:", { url, baseUrl });
        // If the url is a relative url, prefix it with the base url
        if (url.startsWith("/")) {
          return `${baseUrl}${url}`;
        }
        // If the url is already an absolute url that starts with the base url
        else if (url.startsWith(baseUrl)) {
          return url;
        }
        // Default to the base url
        return baseUrl;
      } catch (error) {
        console.error("Redirect error:", error);
        return baseUrl;
      }
    },
    async signIn({ user, account, profile }) {
      try {
        console.log("Sign-in attempt:", { user, account, profile });

        if (account?.provider === "google") {
          const userPromise = prisma.user.findUnique({
            where: { email: profile.email },
            include: { accounts: true },
          });

          const existingUser = await Promise.race([
            userPromise,
            timeoutPromise,
          ]);

          if (!existingUser) {
            return true; // Let NextAuth create the user
          }

          // If user exists but doesn't have a Google account linked
          if (!existingUser.accounts.some((acc) => acc.provider === "google")) {
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
        }
        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        if (error.message === "Initial connection timeout") {
          return "/auth/error?error=Timeout";
        }
        return false;
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
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
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
