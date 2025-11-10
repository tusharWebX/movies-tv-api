import { z } from "zod";

export const createEntrySchema = z.object({
  title: z.string().min(1),
  type: z.enum(["MOVIE", "TV_SHOW"]),
  director: z.string().min(1),
  budget: z.number().int().optional(),
  location: z.string().optional(),
  duration: z.number().int().optional(),
  year: z.number().int().optional(),
});