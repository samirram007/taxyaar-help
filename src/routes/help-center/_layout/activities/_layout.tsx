import Activities from '@/features/activities';
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/help-center/_layout/activities/_layout')(
    {
        component: RouteComponent
    },
);


function RouteComponent() {
    return (
        <>
            <Activities>
                <Outlet />
            </Activities>

        </>
    )
}