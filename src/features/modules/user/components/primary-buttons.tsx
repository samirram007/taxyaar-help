
import { Button } from '@/components/ui/button'


import { IconUserPlus } from '@tabler/icons-react'


export function PrimaryButtons() {
  // const { setOpen } = useUser()
  return (
    <div className='flex gap-2'>
      <Button asChild className="space-x-1"> 
          <span>Add User</span>
          <IconUserPlus size={18} />

      </Button>
      {/* <Button className='space-x-1' onClick={() => setOpen('add')}>
        <span>Add User</span> <IconUserPlus size={18} />
      </Button> */}
    </div >
  )
}
