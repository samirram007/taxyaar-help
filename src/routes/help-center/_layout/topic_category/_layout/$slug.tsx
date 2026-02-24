
import { TopicCategoryQueryOptions } from '@/features/modules/topic_category/data/queryOptions'

import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import React, { Suspense } from 'react'
import z from 'zod'

const TopicCategoryDetails = React.lazy(() =>
  import('@/features/modules/topic_category/details')
)
const paramsSchema = z.object({
  slug: z.string()
})
export const Route = createFileRoute(
  '/help-center/_layout/topic_category/_layout/$slug',
)({
  params: {
    parse: (params) => paramsSchema.parse(params),
    stringify: ({ slug }) => ({ slug: `${slug}` }),
  },
  loader: ({ context, params: { slug } }) => {

    return context.queryClient.ensureQueryData(TopicCategoryQueryOptions(slug))
  },
  component: () => {
    // const { data: topicCategory } = useSuspenseQuery(TopicCategoryQueryOptions())
    const { slug } = Route.useParams()
    const { data: topicCategory } = useSuspenseQuery(TopicCategoryQueryOptions(slug))
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicCategoryDetails data={topicCategory?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topic category data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


