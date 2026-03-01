
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
 

import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { type HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type OtpFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
  otp: z.string().min(1, { message: 'Please enter your otp code.' }),
})

export function OtpForm({ className, ...props }: OtpFormProps) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { otp: '' },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log({ data })

    setTimeout(() => {
      setIsLoading(false)
      navigate({ to: '/' })
    }, 1000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='otp'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormControl>
                    <input
                      {...field}
                      type='text'
                      placeholder='Enter your OTP code'
                      className='border rounded px-3 py-2'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='mt-2' disabled={!form.formState.isValid || isLoading}>
              Verify
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
