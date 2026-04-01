import HelpCenterProvider from '@/features/help-center/contexts/help_center-context'
import HelpCentereLayout from '@/features/help-center/layouts/help_center-layout'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/help-center/_layout')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      if (location.pathname === '/help-center') return

      throw redirect({
        to: '/help-center',
      })
    }
  },
  component: () => {
    return (
      <HelpCenterProvider>
        <HelpCentereLayout />
      </HelpCenterProvider>
    )
  }
})

