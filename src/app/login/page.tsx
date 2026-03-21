"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "~/server/better-auth/client";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message ?? "Sign in failed");
      } else {
        router.push("/dashboard");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Subtle radial glow behind the card */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-[380px]">
        {/* Card with border glow */}
        <div className="rounded-lg border border-border/60 bg-card/80 shadow-2xl shadow-primary/5 backdrop-blur-sm">
          {/* Glow ring */}
          <div className="absolute -inset-px -z-10 rounded-lg bg-primary/10 blur-sm" />

          {/* Header */}
          <div className="flex flex-col items-center px-8 pt-10 pb-2">
            {/* Logo */}
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground text-2xl font-black shadow-lg shadow-primary/20">
              D
            </div>

            <h1 className="text-xl font-semibold tracking-[0.15em] text-foreground">
              Digitaly Admin
            </h1>

            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Control Panel
            </p>
          </div>

          {/* Form */}
          <div className="px-8 pt-6 pb-8">
            <form onSubmit={handleSubmit} className="grid gap-4">
              {error && (
                <div className="rounded border-l-2 border-l-destructive bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="grid gap-1.5">
                <Label
                  htmlFor="email"
                  className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@digitaly.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-border/60 bg-background/60 text-sm placeholder:text-muted-foreground/40 focus-visible:ring-primary/40"
                />
              </div>

              <div className="grid gap-1.5">
                <Label
                  htmlFor="password"
                  className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-border/60 bg-background/60 text-sm placeholder:text-muted-foreground/40 focus-visible:ring-primary/40"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-2 w-full bg-primary font-mono text-xs uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                    Authenticating
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="size-3.5" />
                    Sign In
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
          Secured Access
        </p>
      </div>
    </div>
  );
}
