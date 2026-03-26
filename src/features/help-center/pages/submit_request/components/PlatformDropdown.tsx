'use client'

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import type { UseFormReturn } from 'react-hook-form'
import type { TicketForm } from '../data/schema'

type Props = {
  form: UseFormReturn<TicketForm>
}

const PLATFORM_OPTIONS = [
  { label: 'iOS', value: 'ios' },
  { label: 'App', value: 'app' },
  { label: 'Web', value: 'web' },
]

const PlatformDropdown = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name="platform"
      render={({ field }) => (
        <FormItem className="grid gap-2">
          <FormLabel className="text-[12px]! font-medium text-zinc-700">
            Are you Filing through Web / App?
          </FormLabel>

          <div>
            <Select
              value={field.value || undefined} // ⚠️ important
              onValueChange={field.onChange}
            >
              <div className="w-full rounded-[2px] border! border-zinc-300! bg-white!">
                <SelectTrigger className="h-9 w-full rounded-[2px] border-0! bg-transparent px-3! text-[12px]! shadow-none! focus-visible:ring-0!">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
              </div>

              <SelectContent>
                {PLATFORM_OPTIONS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <FormMessage className="mt-0! text-[11px]!" />
        </FormItem>
      )}
    />
  )
}

export default PlatformDropdown
