import Subscriptions from '@/features/help-center/pages/subscription'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'

export const Route = createFileRoute(
    '/help-center/_layout/activities/_layout/subscriptions/',
)({
    component: () => {
        return (
            <Suspense fallback={<Loader className='animate-spin' />}>
                <Subscriptions />
            </Suspense>
        )
    },
});