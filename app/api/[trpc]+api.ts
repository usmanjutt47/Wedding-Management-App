import { createContext } from "@/lib/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { rootRouter } from "@/lib/trpc/routes";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api",
    req,
    router: rootRouter,
    createContext,
  });

export { handler as GET, handler as POST };
