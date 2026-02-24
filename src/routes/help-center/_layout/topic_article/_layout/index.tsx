
import TopicArticle from '@/features/modules/topic_article'
import { TopicArticleQueryOptions } from '@/features/modules/topic_article/data/queryOptions'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'

export const Route = createFileRoute(
  '/help-center/_layout/topic_article/_layout/',
)({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(TopicArticleQueryOptions()),
  component: () => {
    const { data: topicCategories } = useSuspenseQuery(TopicArticleQueryOptions())
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicArticle data={topicCategories?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topicarticle data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


