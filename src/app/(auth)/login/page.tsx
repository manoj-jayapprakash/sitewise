import { type Metadata } from "next";
import { GoogleLoginButton } from "./google-login-button";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="m-4 flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="flex flex-grow items-center justify-center p-6">
          <div className="mx-auto grid gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <GoogleLoginButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
