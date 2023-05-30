import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(8, "O nome é obrigatório e precisa de pelo menos 3 caracteres."),
  email: z
    .string()
    .min(5, "O email é obrigatório")
    .email("Forneça um email válido."),
  password: z.string().min(4, "A senha precisa ter pelo menos 4 caracteres."),
  phone: z.string().min(8, "O telefone precisa de pelo menos 8 caracteres"),
});
