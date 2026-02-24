
import TopicSection from '@/features/modules/topic_section'
import { TopicSectionQueryOptions } from '@/features/modules/topic_section/data/queryOptions'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'

export const Route = createFileRoute(
  '/help-center/_layout/topic_section/_layout/',
)({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(TopicSectionQueryOptions()),
  component: () => {
    const { data: topicCategories } = useSuspenseQuery(TopicSectionQueryOptions())
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicSection data={topicCategories?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topicsection data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


