"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { KwLogo } from "~/components/kw/kw-logo";
import { authClient } from "~/server/better-auth/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await authClient.signIn.email({ email, password });
      if (result.error) {
        if (result.error.code === "EMAIL_NOT_VERIFIED") {
          setError(
            "Please verify your email first. We just sent a new verification link to your inbox.",
          );
        } else {
          setError(result.error.message ?? "Sign in failed");
        }
      } else {
        window.location.href = "/dashboard";
      }
    } catch {
      setError("Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="kw-font relative flex min-h-screen flex-col bg-white text-[#121212] dark:bg-[#0a0a0a] dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 540,
            height: 540,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 40%, rgba(232,67,26,0.18) 0%, rgba(232,67,26,0.05) 55%, transparent 75%)",
            filter: "blur(80px)",
            animation: "kw-blob1 14s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 60% 40%, rgba(255,140,60,0.14) 0%, rgba(255,180,100,0.05) 55%, transparent 75%)",
            filter: "blur(90px)",
            animation: "kw-blob2 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <KwLogo className="h-7 w-auto" />
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-[#888] sm:inline-block">
            · Admin
          </span>
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">
          <div className="mb-7 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e8e8e8] bg-white px-3 py-1.5 text-[12px] font-medium text-[#121212] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)] dark:border-[#1f1f1f] dark:bg-[#111111] dark:text-white">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E8431A]" />
              Admin console
            </div>
            <h1 className="text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-[#121212] dark:text-white">
              Welcome <span className="text-[#E8431A]">back.</span>
            </h1>
            <p className="mt-2 text-[14px] text-[#888]">
              Restricted to authorized KitsWand staff.
            </p>
          </div>

          <div className="rounded-3xl border border-[#efefef] bg-white p-7 shadow-[0px_8px_32px_0px_rgba(0,0,0,0.06)] dark:border-[#1f1f1f] dark:bg-[#111111]">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-xl border-l-2 border-l-destructive bg-destructive/10 px-3 py-2 text-[13px] text-destructive">
                  {error}
                </div>
              )}
              <div>
                <Label
                  htmlFor="email"
                  className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#888]"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  autoFocus
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@kitswand.com"
                  className="mt-2 h-11 rounded-xl border-[#efefef] bg-[#fafafa] focus-visible:border-[#E8431A]/40 focus-visible:ring-[#E8431A]/20 dark:border-[#1f1f1f] dark:bg-[#1a1a1a]"
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#888]"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 h-11 rounded-xl border-[#efefef] bg-[#fafafa] focus-visible:border-[#E8431A]/40 focus-visible:ring-[#E8431A]/20 dark:border-[#1f1f1f] dark:bg-[#1a1a1a]"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E8431A] py-3.5 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#d63c17] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                style={{
                  boxShadow:
                    "rgba(0,0,0,0.18) 0px 5px 0px, rgba(232,67,26,0.35) 0px 2px 12px",
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Authenticating…
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-[11px] uppercase tracking-[0.18em] text-[#bbb] dark:text-[#555]">
            Secured access · v1
          </p>
        </div>
      </div>
    </div>
  );
}
