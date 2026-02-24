
import { Button } from '@/components/ui/button'
import { Route as TopicSectionDetailRoute } from '@/routes/help-center/_layout/topic_section/_layout/$slug'

import { IconUserPlus } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

export function PrimaryButtons() {
  // const { setOpen } = useTopicSection()
  return (
    <div className='flex gap-2'>
      <Button asChild className="space-x-1">
        <Link to={TopicSectionDetailRoute.to} params={{ id: 'new' }}>
          <span>Add Topic Section</span>
          <IconUserPlus size={18} />
        </Link>
      </Button>
      {/* <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>Add TopicSection</span> <IconUserPlus size={18} />
      </Button> */}
    </div >
  )
}
