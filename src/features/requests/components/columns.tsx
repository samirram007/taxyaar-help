import LongText from '@/components/long-text'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import type { ColumnDef } from '@tanstack/react-table'




// import RowActions from './row-actions'
import { DataTableColumnHeader } from './DataTableColumnHeader'
import type { Ticket } from '../data/schema'
export const columns: ColumnDef<Ticket>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label='Select all'
                className='translate-y-[2px]'
            />
        ),
        meta: {
            className: cn(
                'sticky md:table-cell left-0 z-10 rounded-tl',
                'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted'
            ),
        },
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select row'
                className='translate-y-[2px]'
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'ticketId',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Reference No' />
        ),
        cell: ({ row }) => {
            const id = row.getValue<string>('ticketId')
            return (
                <LongText className='max-w-36 font-medium'>
                    {id}
                </LongText>
            )
        },
        meta: {
            className: cn(
                'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
                'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
                'sticky left-6 md:table-cell'
            ),
        },
        enableHiding: false,
    },

    {
        accessorKey: 'pan',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='PAN' />
        ),
        cell: ({ row }) => (
            <div className='text-nowrap font-medium'>
                {row.getValue('pan')}
            </div>
        ),
    },

    {
        accessorKey: 'platform',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Platform' />
        ),
        cell: ({ row }) => (
            <div className='text-nowrap'>
                {row.getValue('platform')}
            </div>
        ),
    },

    {
        accessorKey: 'subject',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Subject' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-[250px]'>
                {row.getValue('subject')}
            </LongText>
        ),
    },

    {
        accessorKey: 'statusId',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => {
            const status = row.getValue<number>('statusId')

            return (
                <Badge variant='outline'>
                    Status #{status}
                </Badge>
            )
        },
    },

    {
        accessorKey: 'createdAt',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Created At' />
        ),
        cell: ({ row }) => {
            const date = row.getValue<string>('createdAt')
            return (
                <div className='text-xs text-muted-foreground'>
                    {date ? new Date(date).toLocaleString() : '-'}
                </div>
            )
        },
    },

    {
        accessorKey: 'updatedAt',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Updated At' />
        ),
        cell: ({ row }) => {
            const date = row.getValue<string>('updatedAt')
            return (
                <div className='text-xs text-muted-foreground'>
                    {date ? new Date(date).toLocaleString() : '-'}
                </div>
            )
        },
    },



    // {
    //     id: 'actions',
    //     cell: RowActions,
    // },
]