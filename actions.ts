import { publicProcedure } from "@/lib/trpc";
import { z } from "zod";

export const actions = {
  register: publicProcedure
    .input(
      z.object({
        name: z.string().min(2).trim(),
        email: z.string().email().toLowerCase().trim(),
        password: z.string().min(2),
      })
    )
    .mutation(async ({ input }) => {
      console.log("Register action input:", input);

      return {
        success: true,
        message: "User registered successfully",
        user: {
          name: input.name,
          email: input.email,
        },
      };
    }),
};
