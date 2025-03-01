import { z } from "zod";

export const inviteSchema = z.object({
	invite: z.string().url(),
});

export type IInviteForm = z.infer<typeof inviteSchema>;
