import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { db } from "~/server/db";
import { sendPasswordResetEmail } from "~/server/email";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await sendPasswordResetEmail({
        to: user.email,
        firstName: user.name?.split(" ")[0],
        resetUrl: url,
      });
    },
  },
});

export type Session = typeof auth.$Infer.Session;
