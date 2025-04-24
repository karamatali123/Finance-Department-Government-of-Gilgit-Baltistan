"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session, "dataaa");

  useEffect(() => {
    if (session?.user) {
      router.push("/jobs");
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
        {/* <div className="mt-8">
          <button
            onClick={async () => {
              setLoading(true);
              await signIn("google", { callbackUrl: "/jobs" });
              setLoading(false);
            }}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-[20px] w-[20px] border-t-2 border-b-2 border-primary"></div>
            ) : (
              <Image
                src="/google-logo.svg"
                alt="Google logo"
                width={20}
                height={20}
              />
            )}
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>
        </div> */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setSendingEmail(true);
            await signIn("email", {
              email: email,
              callbackUrl: "/jobs",
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
