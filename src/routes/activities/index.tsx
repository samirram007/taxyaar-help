import { createFileRoute, redirect } from '@tanstack/react-router'
import Activities from '@/features/activities'

export const Route = createFileRoute('/activities/')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/help-center',
        replace: true,
      })
    }
  },
  component: ActivitiesComponent,
})

function ActivitiesComponent() {
  return <Activities />
}
