
import { Main } from '@/layouts/components/main'
import { columns } from './components/columns'





import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { Dialogs } from './components/dialogs'
import { GridTable } from './components/grid-table'
import { PrimaryButtons } from './components/primary-buttons'
import { topicSectionListSchema, type TopicSectionList } from './data/schema'

import { useHelpCenter } from '@/features/help-center/contexts/help_center-context'
import { Route as HelpCenterRouteTo } from '@/routes/help-center/_layout'
import { useEffect } from 'react'
// Import the correct type for topicsectionListSchema



interface TopicSectionProps {
    data: TopicSectionList
}

export default function TopicSection({ data }: TopicSectionProps) {
    const { setHeaderVisible } = useHelpCenter()
    useEffect(() => {
        setHeaderVisible(false)
    }, [])

    return (
        <>

            <Main className='min-w-full'>
                <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>Topic Section List</h2>
                        <p className='text-muted-foreground'>
                            Manage your TopicSection  here.
                        </p>
                        <Link to={HelpCenterRouteTo.to} className='text-blue-600 hover:underline flex flex-row items-center gap-2'  >
                            <ArrowLeft size={12} />  Back to Help Center </Link>
                    </div>
                    <PrimaryButtons />
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
                    <GridTable
                        data={topicSectionListSchema.parse(data ?? [])}
                        columns={columns} />
                </div>
            </Main>

            <Dialogs />
        </>
    )
}
