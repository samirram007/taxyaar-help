import { z } from "zod";

export const ticketSchema = z.object({
    ticketId: z.string(),
    typeId: z.number(),
    statusId: z.number(),
    pan: z.string().min(1),
    platform: z.string().min(1),
    subject: z.string().min(1),
    description: z.string().min(1),
    createdAt: z.string().datetime().nullable(),
    updatedAt: z.string().datetime().nullable(),
});



export type Ticket = z.infer<typeof ticketSchema>;