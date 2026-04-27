import { analyticsRouter } from "~/server/api/routers/analytics";
import { applicationsRouter } from "~/server/api/routers/applications";
import { couponsRouter } from "~/server/api/routers/coupons";
import { licensesRouter } from "~/server/api/routers/licenses";
import { partnersRouter } from "~/server/api/routers/partners";
import { payoutsRouter } from "~/server/api/routers/payouts";
import { productsRouter } from "~/server/api/routers/products";
import { usersRouter } from "~/server/api/routers/users";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  analytics: analyticsRouter,
  applications: applicationsRouter,
  coupons: couponsRouter,
  licenses: licensesRouter,
  partners: partnersRouter,
  payouts: payoutsRouter,
  products: productsRouter,
  users: usersRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
