import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'
import TopicCategoryProvider from '@/features/modules/topic_category/contexts/topic_category-context'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/help-center/_layout/topic_category/_layout',
)({
  component: () => {
    return (
      <TopicCategoryProvider>

        <Outlet />
      </TopicCategoryProvider>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})


