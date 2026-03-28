import { useEffect, useMemo, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type ProfileEditModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  profile: {
    name?: string | null
    email?: string | null
    username?: string | null
  } | null
  onSave?: (data: {
    name: string
    email: string
    phone: string
    alias: string
  }) => void
}

export function ProfileEditModal({
  open,
  onOpenChange,
  profile,
  onSave,
}: ProfileEditModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    alias: '',
  })

  const displayName = profile?.name || profile?.username || 'User'
  const avatarFallback = useMemo(() => {
    return displayName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || '')
      .join('')
  }, [displayName])

  useEffect(() => {
    if (!open) return

    setForm({
      name: profile?.name || profile?.username || '',
      email: profile?.email || '',
      phone: '',
      alias: profile?.username || '',
    })
  }, [open, profile])
  //fields acc. to edit profile form( shoukd be replaced by api fields)

  const updateField = (
    field: 'name' | 'email' | 'phone' | 'alias',
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onSave?.(form)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{ zIndex: 9999 }}
        className="max-h-[85vh] overflow-y-auto p-0 sm:max-w-160 bg-white border-slate-200"
      >
        <DialogHeader className="border-b border-slate-200 bg-white px-6 py-4">
          <DialogTitle className="text-base font-semibold text-slate-900">
            Edit my profile
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 bg-white px-6 py-5">
          <p className="text-sm text-slate-600">
            Share a bit about yourself with the community in your profile
            details.
          </p>

          <div className="space-y-2">
            <Label
              htmlFor="profile-name"
              className="text-slate-700 font-medium"
            >
              Name* (required)
            </Label>
            <Input
              id="profile-name"
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="profile-email"
              className="text-slate-700 font-medium"
            >
              Email
            </Label>
            <Input
              id="profile-email"
              type="email"
              readOnly
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="profile-phone"
              className="text-slate-700 font-medium"
            >
              Phone
            </Label>
            <Input
              id="profile-phone"
              value={form.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-slate-700 font-medium">Profile photo</Label>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-slate-300">
                <AvatarImage src="/avatars/01.png" alt={displayName} />
                <AvatarFallback className="bg-slate-100 text-slate-600">
                  {avatarFallback || 'U'}
                </AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="sm"
                type="button"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Change photo
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="profile-alias"
              className="text-slate-700 font-medium"
            >
              Alias
            </Label>
            <Input
              id="profile-alias"
              value={form.alias}
              onChange={(event) => updateField('alias', event.target.value)}
              className="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-700">
              Manage two-factor authentication (2FA)
            </p>
            <Button
              variant="link"
              className="h-auto p-0 text-sm text-blue-600 hover:text-blue-700"
              type="button"
            >
              Manage 2FA
            </Button>
          </div>
        </div>

        <DialogFooter className="border-t border-slate-200 bg-slate-50 px-6 py-4">
          <Button
            variant="ghost"
            type="button"
            onClick={() => onOpenChange(false)}
            className="text-slate-700 hover:bg-slate-200"
          >
            Close
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
