import { createFileRoute, redirect } from '@tanstack/react-router'

import HomePage from '@/features/landingpage/components/HomePage'

export const Route = createFileRoute('/')({
  beforeLoad: ({ location }) => {
    throw redirect({
      to: '/help-center',
      replace: true,
      search: location.search, // optional: preserve query params
    })
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <HomePage />
}
