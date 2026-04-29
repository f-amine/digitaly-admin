import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { db } from "~/server/db";
import {
  sendPasswordResetEmail,
  sendVerificationEmail,
} from "~/server/email";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await sendPasswordResetEmail({
        to: user.email,
        firstName: user.name?.split(" ")[0],
        resetUrl: url,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendVerificationEmail({
        to: user.email,
        firstName: user.name?.split(" ")[0],
        verifyUrl: url,
      });
    },
  },
});

export type Session = typeof auth.$Infer.Session;
