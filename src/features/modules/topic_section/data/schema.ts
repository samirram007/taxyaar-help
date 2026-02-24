import { ActiveInactiveStatusSchema } from '@/types/active-inactive-status';
import { TrueFalseSchema } from '@/types/true-false';
import { z } from 'zod';
import { topicArticleListSchema } from '../../topic_article/data/schema';
import { topicCategorySchema } from '../../topic_category/data/schema';





export const topicSectionSchema: any = z.object({
  id: z.number().int().positive().nullish(),
  name: z.string().min(1),
  description: z.string().nullish(),
  slug: z.string().min(1),
  status: ActiveInactiveStatusSchema,
  isMarked: TrueFalseSchema,
  topicCategoryId: z.number().int().positive(),
  topicCategory: z.lazy(() => topicCategorySchema).nullish(),
  topicArticles: z.lazy(() => topicArticleListSchema).nullish(),


})
export type TopicSection = z.infer<typeof topicSectionSchema>
export const topicSectionListSchema = z.array(topicSectionSchema)
export type TopicSectionList = z.infer<typeof topicSectionListSchema>



export const formSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required.' }),
    slug: z.string().min(1, { message: 'Slug is required.' }),
    status: z.string().min(1, { message: 'Status is required.' }),
    description: z.string().nullish(),
    isMarked: z.boolean(),
    topicCategoryId: z.number().int().positive(),
    topicCategory: z.lazy(() => topicCategorySchema).nullish(),
    isEdit: z.boolean(),
  })

export type TopicSectionForm = z.infer<typeof formSchema>