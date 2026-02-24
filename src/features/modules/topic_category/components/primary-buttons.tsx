
import { Button } from '@/components/ui/button'
import { Route as TopicCategoryDetailRoute } from '@/routes/help-center/_layout/topic_category/_layout/$id'

import { IconUserPlus } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

export function PrimaryButtons() {
  // const { setOpen } = useTopicCategory()
  return (
    <div className='flex gap-2'>
      <Button asChild className="space-x-1">
        <Link to={TopicCategoryDetailRoute.to} params={{ id: 'new' }}>
          <span>Add Topic Category</span>
          <IconUserPlus size={18} />
        </Link>
      </Button>
      {/* <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>Add TopicCategory</span> <IconUserPlus size={18} />
      </Button> */}
    </div >
  )
}
