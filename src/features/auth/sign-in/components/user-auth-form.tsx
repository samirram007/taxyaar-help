import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from '@tanstack/react-router'
import { type HTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useAuth } from '../../contexts/AuthContext'

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, {
      message: 'Please enter your password',
    })
    .min(7, {
      message: 'Password must be at least 7 characters long',
    }),
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { login, isLoading } = useAuth()

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await login(data)
      .then(() => {
        router.navigate({ to: '/help-center' })
      })
      .catch((error) => {
        console.error('Login failed:...........', error)
      })
  }

  return (
    <div className={cn('grid! gap-4!', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid! gap-4!">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1!">
                  <FormLabel className="text-sm! font-medium! text-slate-600!">
                    Your email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="h-11! rounded-sm! border-slate-300! bg-white! text-sm!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1!">
                  <div className="flex! items-center! justify-between!">
                    <FormLabel className="text-sm! font-medium! text-slate-600!">
                      Password
                    </FormLabel>
                    <Link
                      to="/forgot-password"
                      className="text-sm! font-medium! text-sky-600! hover:opacity-80!"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <FormControl>
                    <PasswordInput
                      placeholder=""
                      className="h-11!  "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-2! h-11! w-full! rounded-sm! bg-blue-600! text-base! font-semibold! text-white! hover:bg-blue-700!"
              disabled={isLoading}
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
