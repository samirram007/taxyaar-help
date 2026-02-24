
import { Main } from '@/layouts/components/main'
import { columns } from './components/columns'





import { useHelpCenter } from '@/features/help-center/contexts/help_center-context'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { Dialogs } from './components/dialogs'
import { GridTable } from './components/grid-table'
import { PrimaryButtons } from './components/primary-buttons'
import { topicArticleListSchema, type TopicArticleList } from './data/schema'

import { Route as HelpCenterRouteTo } from '@/routes/help-center/_layout'

// Import the correct type for topicarticleListSchema



interface TopicArticleProps {
    data: TopicArticleList
}

export default function TopicArticle({ data }: TopicArticleProps) {
    const { setHeaderVisible } = useHelpCenter()
    useEffect(() => {
        setHeaderVisible(false)
    }, [])

    return (
        <>

            <Main className='min-w-full'>
                <div className='mb-2 flex flex-wrap items-start justify-between space-y-2'>
                    <div>
                        <div className='flex flex-row items-center gap-2'>
                            <Link to={HelpCenterRouteTo.to} className='hidden'  ><ArrowLeft size={24} /></Link>
                            <h2 className='text-2xl font-bold tracking-tight'>Article List</h2>
                        </div>
                        <p className='text-muted-foreground'>
                            Manage your Articles  here.
                        </p>
                        <p>
                            <Link to={HelpCenterRouteTo.to} className='text-blue-600 hover:underline flex flex-row items-center gap-2'  > <ArrowLeft size={12} /> Back to Help Center </Link>
                        </p>
                    </div>
                    <PrimaryButtons />
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
                    <GridTable
                        data={topicArticleListSchema.parse(data ?? [])}
                        columns={columns} />
                </div>
            </Main>

            <Dialogs />
        </>
    )
}
