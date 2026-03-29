import { z } from "zod";

export const ticketTypeSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const TicketTypeResponseSchema = z.object({
    data: z.array(ticketTypeSchema),
    status: z.boolean(),
    code: z.number(),
    message: z.string(),
});



export type TicketType = z.infer<typeof ticketTypeSchema>;


export const ticketFormSchema = z.object({
    email: z.string().email(),

    ticketTypeId: z.number(),

    platform: z.enum(["web", "app"]), // better than free string

    pan: z
        .string()
        .length(10)
        .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),

    subject: z.string().min(1),

    description: z.string().min(1),

    mobileNumber: z
        .string(),

    file: z
        .any()
        .optional(),
});


export type TicketForm = z.infer<typeof ticketFormSchema>;