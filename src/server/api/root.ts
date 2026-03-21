import { analyticsRouter } from "~/server/api/routers/analytics";
import { productsRouter } from "~/server/api/routers/products";
import { usersRouter } from "~/server/api/routers/users";
import { licensesRouter } from "~/server/api/routers/licenses";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  analytics: analyticsRouter,
  products: productsRouter,
  users: usersRouter,
  licenses: licensesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.analytics.getOverview();
 */
export const createCaller = createCallerFactory(appRouter);
