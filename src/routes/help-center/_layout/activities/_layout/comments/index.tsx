import { topicCommentQueryOptions } from '@/features/help-center/pages/contribution/data/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react';
import React, { Suspense } from 'react'


const Contribution = React.lazy(() => import('@/features/help-center/pages/contribution'));

export const Route = createFileRoute(
    '/help-center/_layout/activities/_layout/comments/',
)({
    loader: ({ context }) => context.queryClient.ensureQueryData(topicCommentQueryOptions()),
    component: () => {

        const { data: comments } = useSuspenseQuery(topicCommentQueryOptions());

        return (
            <Suspense fallback={<Loader className='animate-spin' />}>
                <Contribution data={comments.data} />
            </Suspense>
        )
    },
});
