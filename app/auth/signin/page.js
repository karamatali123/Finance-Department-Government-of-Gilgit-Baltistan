"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_EMAILS } from "../../constants";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session, "dataaa");

  useEffect(() => {
    if (session?.user) {
      const route =
        ADMIN_EMAILS.includes(session.user.email) ? "/admin/dashboard" : "/jobs";
      router.push(route);
    }
  }, [session]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setSendingEmail(true);
            await signIn("email", {
              email: email,
              callbackUrl: ADMIN_EMAILS.includes(email) ? "/admin/dashboard" : "/jobs",
            });
            setSendingEmail(false);
          }}
        >
          <input
            type="email"
            id="email"
            placeholder="eg: example@gmail.com"
            name="personalInformation.email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={sendingEmail}
          >
            {sendingEmail ? "Signing in..." : "Sign in with Email"}
          </button>
        </form>
      </div>
    </div>
  );
}
