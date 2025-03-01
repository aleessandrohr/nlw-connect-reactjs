import { z } from "zod";

export const subscribeSchema = z.object({
	username: z.string({ message: "Nome é obrigatório" }).min(3, {
		message: "Nome deve conter pelo menos 3 caracteres",
	}),
	email: z.string({ message: "E-mail é obrigatório" }).email({
		message: "E-mail inválido",
	}),
});

export type ISubscribeForm = z.infer<typeof subscribeSchema>;
