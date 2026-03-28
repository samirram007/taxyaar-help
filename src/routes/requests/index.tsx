import { createFileRoute, redirect } from '@tanstack/react-router'
import Requests from '@/features/requests'

export const Route = createFileRoute('/requests/')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/help-center',
        replace: true,
      })
    }
  },
  component: RequestsComponent,
})

function RequestsComponent() {
  return <Requests />
}
