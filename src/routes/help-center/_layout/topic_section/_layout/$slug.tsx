
import { TopicSectionQueryOptions } from '@/features/modules/topic_section/data/queryOptions'

import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import React, { Suspense } from 'react'
import z from 'zod'

const TopicSectionDetails = React.lazy(() =>
  import('@/features/modules/topic_section/details')
)
const paramsSchema = z.object({
  slug: z.string(),

})
export const Route = createFileRoute(
  '/help-center/_layout/topic_section/_layout/$slug',
)({
  params: {
    parse: (params) => paramsSchema.parse(params),
    stringify: ({ slug }) => ({ slug: `${slug}` }),
  },
  loader: ({ context, params: { slug } }) => {
    return context.queryClient.ensureQueryData(TopicSectionQueryOptions(slug))
  },
  component: () => {
    const { slug } = Route.useParams()

    const { data: topicSection } = useSuspenseQuery(TopicSectionQueryOptions(slug))
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicSectionDetails data={topicSection?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topicsection data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


