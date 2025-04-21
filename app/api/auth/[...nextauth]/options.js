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
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
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
      // Include user ID in session
      session.user.id = user.id;
      return session;
    },
    async signIn({ user, account, profile, email }) {
      // You can add custom logic here
      return true;
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
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verifyRequest",
    error: "/auth/error",
  },
  debug: true, // Enable debug logs
};
