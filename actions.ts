import fs from "fs/promises";
import path from "path";
import { publicProcedure } from "@/lib/trpc";
import { z } from "zod";

const dataFilePath = path.join(process.cwd(), "data.json");

export const actions = {
  createPost: publicProcedure
    .input(
      z.object({
        title: z.string().min(3).trim(),
        content: z.string().min(5).trim(),
      })
    )
    .mutation(async ({ input }) => {
      console.log("Creating Post:", input);

      try {
        let posts = [];

        try {
          const fileData = await fs.readFile(dataFilePath, "utf-8");
          posts = JSON.parse(fileData);
        } catch (error) {
          console.log("data.json file not found, creating a new one.");
        }

        const newPost = {
          id: Date.now(),
          title: input.title,
          content: input.content,
          createdAt: new Date().toISOString(),
        };

        posts.push(newPost);

        await fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2));

        return {
          success: true,
          message: "Post created successfully",
          post: newPost,
        };
      } catch (error) {
        console.error("Error saving post:", error);
        throw new Error("Failed to create post.");
      }
    }),
};
