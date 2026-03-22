import SubmitRequestPage from '@/features/help-center/pages/submit_request'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/help-center/_layout/submit_request/')({
  component: SubmitRequestPage,
})
