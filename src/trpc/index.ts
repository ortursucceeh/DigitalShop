import AppRouter from "next/dist/client/components/app-router";
import { publicProcedure, router } from "./trpc";
import { authRouter } from "./auth-router";

export const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
