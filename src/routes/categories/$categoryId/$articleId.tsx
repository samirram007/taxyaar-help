import ArticlePage from '@/features/article'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/$categoryId/$articleId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ArticlePage />;
}
