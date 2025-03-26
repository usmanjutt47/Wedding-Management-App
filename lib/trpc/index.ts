import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { initTRPC } from "@trpc/server";

export async function createContext({}: FetchCreateContextFnOptions) {
  return {};
}

const t = initTRPC.context<typeof createContext>().create({
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
