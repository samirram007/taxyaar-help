import LongText from '@/components/long-text'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/features/global/components/data-table/data-table-column-header'
import { cn } from '@/lib/utils'
import type { ColumnDef } from '@tanstack/react-table'
import type { TopicComment } from '../data/schema'




export const columns: ColumnDef<TopicComment>[] = [
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
        accessorKey: 'name',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Name' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-[300px]'>
                {row.getValue('name')}
            </LongText>
        ),
        size: 300,
    },

    {
        accessorKey: 'comment',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Comment' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-[500px]'>
                {row.getValue('comment')}
            </LongText>
        ),
        size: 500,
    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => {
            const status = row.getValue('status') as string

            const variant =
                status === 'approved'
                    ? 'default'
                    : status === 'rejected'
                        ? 'destructive'
                        : 'secondary'

            return <Badge variant={variant}>{status}</Badge>
        },
    },



    //   {
    //     id: 'actions',
    //     cell: RowActions,
    //   },
]
