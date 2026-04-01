import { ActiveInactiveStatusSchema } from '@/types/active-inactive-status';
import { TrueFalseSchema } from '@/types/true-false';
import { z } from 'zod';
import { topicSectionSchema } from '../../topic_section/data/schema';
import { userSchema } from '../../user/data/schema';
import { topicCommentSchema } from '@/features/help-center/pages/contribution/data/schema';


export const relatedArticleSchema = z.object({
  id: z.number().int().positive().nullish(),
  title: z.string().min(1),
  slug: z.string().min(1),
  status: ActiveInactiveStatusSchema,
})

export type RelatedArticle = z.infer<typeof relatedArticleSchema>

export const topicArticleSchema = z.object({
  id: z.number().int().positive().nullish(),
  title: z.string().min(1),
  description: z.string().nullish(),
  slug: z.string().min(1),
  status: ActiveInactiveStatusSchema,
  isMarked: TrueFalseSchema,
  content: z.string(),
  topicSectionId: z.number().int().positive(),
  topicSection: z.lazy(() => topicSectionSchema).nullish(),
  comments: z.lazy(() => z.array(topicCommentSchema)).nullish(),
  relatedArticles: z.lazy(() => z.array(relatedArticleSchema)).nullish(),
  createdBy: z.number().int().positive().nullish(),
  updatedBy: z.number().int().positive().nullish(),
  creator: userSchema.nullish(),
  updater: userSchema.nullish(),
  createdAt: z.coerce.date().nullish(),
  updatedAt: z.coerce.date().nullish(),


})
export type TopicArticle = z.infer<typeof topicArticleSchema>
export const topicArticleListSchema = z.array(topicArticleSchema)
export type TopicArticleList = z.infer<typeof topicArticleListSchema>



export const formSchema = z
  .object({
    title: z.string().min(1, { message: 'Title is required.' }),
    slug: z.string().min(1, { message: 'Slug is required.' }),
    status: z.string().min(1, { message: 'Status is required.' }),
    description: z.string().nullish(),
    content: z.string(),
    isMarked: z.boolean(),
    topicSectionId: z.number().int().positive(),
    topicSection: z.lazy(() => topicSectionSchema).nullish(),

    isEdit: z.boolean(),
  })

export type TopicArticleForm = z.infer<typeof formSchema>