import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'
import TopicSectionProvider from '@/features/modules/topic_section/contexts/topic_section-context'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/help-center/_layout/topic_section/_layout',
)({
  component: () => {
    return (
      <TopicSectionProvider>

        <Outlet />
      </TopicSectionProvider>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})


