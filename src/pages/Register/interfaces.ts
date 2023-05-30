import { z } from "zod";
import { registerSchema } from "./schemas";

export type tRegisterRequest = z.infer<typeof registerSchema>;
