
import TopicCategory from '@/features/modules/topic_category'
import { TopicCategoryQueryOptions } from '@/features/modules/topic_category/data/queryOptions'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'

export const Route = createFileRoute(
  '/help-center/_layout/topic_category/_layout/',
)({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(TopicCategoryQueryOptions()),
  component: () => {
    const { data: topicCategories } = useSuspenseQuery(TopicCategoryQueryOptions())
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicCategory data={topicCategories?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topiccategory data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


