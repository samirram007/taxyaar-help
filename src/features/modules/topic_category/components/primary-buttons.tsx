
import { Button } from '@/components/ui/button'



export function PrimaryButtons() {
  // const { setOpen } = useTopicCategory()
  return (
    <div className='flex gap-2'>
      <Button asChild className="space-x-1">
        new
      </Button>
      {/* <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>Add TopicCategory</span> <IconUserPlus size={18} />
      </Button> */}
    </div >
  )
}
