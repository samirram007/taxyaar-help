
import { Button } from '@/components/ui/button'
import { Route as TopicArticleDetailRoute } from '@/routes/help-center/_layout/topic_article/_layout/$slug'

import { IconUserPlus } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'

export function PrimaryButtons() {
  // const { setOpen } = useTopicArticle()
  return (
    <div className='flex gap-2'>
      <Button asChild className="space-x-1">
        <Link to={TopicArticleDetailRoute.to} params={{ slug: 'new' }}>
          <span>Add Topic Article</span>
          <IconUserPlus size={18} />
        </Link>
      </Button>
      {/* <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>Add TopicArticle</span> <IconUserPlus size={18} />
      </Button> */}
    </div >
  )
}
