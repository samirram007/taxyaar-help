import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'
import TopicArticleProvider from '@/features/modules/topic_article/contexts/topic_article-context'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/help-center/_layout/topic_article/_layout',
)({
  component: () => {
    return (
      <TopicArticleProvider>

        <Outlet />
      </TopicArticleProvider>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})


