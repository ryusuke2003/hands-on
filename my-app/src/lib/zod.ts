import { z } from "zod";

export const entrySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1).max(2000),
});

export type EntryInput = z.infer<typeof entrySchema>;

