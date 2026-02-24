import LongText from '@/components/long-text'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import type { ColumnDef } from '@tanstack/react-table'



import { ActiveInactiveStatusTypes } from '@/types/active-inactive-status'
import { DataTableColumnHeader } from '../../../global/components/data-table/data-table-column-header'
import type { TopicArticle } from '../data/schema'
import RowActions from './row-actions'

export const columns: ColumnDef<TopicArticle>[] = [
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
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36'>{row.getValue('title')}</LongText>
    ),
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
    accessorKey: 'slug',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Slug' />
    ),
    cell: ({ row }) => (
      <div className='w-fit text-nowrap'>{row.getValue('slug')}</div>
    ),
  },
  {
    accessorKey: 'topicSectionId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Category / Section' />
    ),
    cell: ({ row }) => (
      <div className='w-fit text-nowrap'>
        <Badge variant='secondary' className='capitalize shadow-md'>

          {row.original.topicSection?.topicCategory?.name ?? row.getValue('topicSection.topicCategory.name') + ' - '}
        </Badge>
        {row.original.topicSection?.name ?? row.getValue('topicSection.name')}
      </div>
    ),
  },
  {
    accessorKey: 'updatedBy',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='UpdateInfo' />
    ),
    cell: ({ row }) => {
      const updatedBy = row.original.updater?.name ?? row.getValue('updater.name')
      if (!updatedBy) return null
      return (
        <div className='flex flex-col gap-1' >
          <div>{updatedBy}</div>
          <div className='text-sm text-muted-foreground'>{row.original.updatedAt?.toLocaleString()}</div>

        </div >
      )
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const { status } = row.original
      const badgeColor = ActiveInactiveStatusTypes.get(status)
      return (
        <div className='flex space-x-2'>
          <Badge variant='outline' className={cn('capitalize', badgeColor)}>
            {row.getValue('status')}
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableHiding: false,
    enableSorting: false,
  },

  {
    id: 'actions',
    cell: RowActions,
  },
]
