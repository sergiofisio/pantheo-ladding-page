import * as z from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(2, "O nome deve ter pelo menos 2 caracteres"),

  company: z
    .string()
    .trim()
    .min(2, "O nome da empresa deve ter pelo menos 2 caracteres"),

  email: z.string().trim().email("Digite um email válido"),

  phone: z
    .string()
    .trim()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length >= 10 && val.length <= 11, {
      message: "Digite um telefone válido (com DDD)",
    }),

  services: z
    .array(z.string())
    .default([])
    .refine((val) => val.length > 0, "Selecione pelo menos um serviço"),

  message: z
    .string()
    .trim()
    .min(10, "Descreva seu problema para a gente")
    .optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
