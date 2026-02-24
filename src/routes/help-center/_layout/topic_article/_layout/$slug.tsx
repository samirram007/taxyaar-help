
import { TopicArticleQueryOptions } from '@/features/modules/topic_article/data/queryOptions'

import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import React, { Suspense } from 'react'
import z from 'zod'

const TopicArticleDetails = React.lazy(() =>
  import('@/features/modules/topic_article/details')
)
const paramsSchema = z.object({
  slug: z.string(),
})
export const Route = createFileRoute(
  '/help-center/_layout/topic_article/_layout/$slug',
)({
  params: {
    parse: (params) => paramsSchema.parse(params),
    stringify: ({ slug }) => ({ slug: `${slug}` }),
  },
  loader: ({ context, params: { slug } }) => {

    return context.queryClient.ensureQueryData(TopicArticleQueryOptions(slug))
  },
  component: () => {
    // const { data: topicArticle } = useSuspenseQuery(TopicArticleQueryOptions())
    const { slug } = Route.useParams()
    const { data: topicArticle } = useSuspenseQuery(TopicArticleQueryOptions(slug))
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicArticleDetails data={topicArticle?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topicarticle data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


