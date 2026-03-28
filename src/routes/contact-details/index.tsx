import { createFileRoute, redirect } from '@tanstack/react-router'
import ContactDetails from '@/features/contact-details'

export const Route = createFileRoute('/contact-details/')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/help-center',
        replace: true,
      })
    }
  },
  component: ContactDetailsComponent,
})

function ContactDetailsComponent() {
  return <ContactDetails />
}
