import { actions } from "@/actions";
import { queries } from "@/queries";
import { router } from ".";

const routes = { ...queries, ...actions };

export const rootRouter = router(routes);

export type RootRouter = typeof rootRouter;
