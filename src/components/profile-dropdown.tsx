import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/features/auth/contexts/AuthContext'
import { Link } from '@tanstack/react-router'
import { ProfileEditModal } from '@/components/profile-edit-modal'

export function ProfileDropdown() {
  const auth = useAuth()
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  const handleLogout = async () => {
    await auth.logout()
  }
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>
                {auth.user?.name
                  ? auth.user.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')
                  : auth.user?.email
                    ? auth.user.email.slice(0, 2).toUpperCase()
                    : 'US'}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {auth.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {auth.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={(event) => {
                event.preventDefault()
                setIsProfileModalOpen(true)
              }}
            >
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/requests">
                Requests
                <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/activities">
                Activities
                <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/contact-details">
                Contact details
                <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <div>Log out</div>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ProfileEditModal
        open={isProfileModalOpen}
        onOpenChange={setIsProfileModalOpen}
        profile={auth.user}
      />
    </>
  )
}
