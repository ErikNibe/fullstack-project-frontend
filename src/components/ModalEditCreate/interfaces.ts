import { z } from "zod";
import { updateSchema } from "./schemas";

export type tUpdate = z.infer<typeof updateSchema>;
