import { z } from 'zod'

export const topicCommentSchema = z.object({
    id: z.number().int().positive(),
    name: z.string(),
    comment: z.string().min(1),
    // remark: z.string().nullable().optional(),
    status: z.string(),
    createdAt: z.string()
});


export type TopicComment = z.infer<typeof topicCommentSchema>;
export const topicCommentListSchema = z.array(topicCommentSchema);
export type TopicCommentList = z.infer<typeof topicCommentListSchema>;



export const topicCommentFormSchema = z.object({
    comment: z.string().min(1, "Comment is required"),
    articleId: z.number(),
});


export type TopicCommentForm = z.infer<typeof topicCommentFormSchema>;