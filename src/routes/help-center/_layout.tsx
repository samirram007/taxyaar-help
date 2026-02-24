import HelpCenterProvider from '@/features/help-center/contexts/help_center-context'
import HelpCentereLayout from '@/features/help-center/layouts/help_center-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/help-center/_layout')({
  component: () => {
    return (
      <HelpCenterProvider>
        <HelpCentereLayout />
      </HelpCenterProvider>
    )
  }
})

