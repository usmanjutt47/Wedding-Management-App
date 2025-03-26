import type { RootRouter } from "@/lib/trpc/routes";
import { createSWRProxyHooks } from "@trpc-swr/client";
import { getBaseUrl } from "./base-url";
import { httpBatchLink } from "@trpc/client";

export const api = createSWRProxyHooks<RootRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api`,
      async headers() {
        return {};
      },
    }),
  ],
});
