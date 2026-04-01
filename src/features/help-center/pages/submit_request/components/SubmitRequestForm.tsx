'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import FormInputField from '@/components/form-input-field'

import SubmitRequestFileUpload from './SubmitRequestFileUpload'
import SubmitRequestEditorToolbar from './SubmitRequestEditorToolbar'

import { ticketFormSchema, type TicketForm } from '../data/schema'
import TicketTypeDropdown from './TicketTypeDropdown'
import PlatformDropdown from './PlatformDropdown'
import { useTicketMasterMutation } from '../data/queryOptions'

function SubmitRequestForm() {
  const { mutate } = useTicketMasterMutation()

  const form = useForm<TicketForm>({
    resolver: zodResolver(ticketFormSchema) as any,
    defaultValues: {
      email: '',
      typeId: 0,
      platform: 'web',
      pan: '',
      subject: '',
      description: '',
      mobileNumber: '',
      file: undefined,
    },
  })

  const onSubmit = (values: TicketForm) => {

    // console.log("values", values);
    // return;

    mutate(values, {
      onSuccess: () => {
        form.reset()
      },
    })
  }
  const fieldClass =
    '!grid !grid-cols-1 !items-start !gap-2 [&_[data-slot=form-label]]:!text-[12px] [&_[data-slot=form-label]]:!font-medium [&_[data-slot=form-label]]:!text-zinc-700 [&_[data-slot=form-message]]:!col-start-1 [&_[data-slot=form-message]]:!text-[11px] [&_[data-slot=input]]:!h-9 [&_[data-slot=input]]:!rounded-[2px] [&_[data-slot=input]]:!border-zinc-300 [&_[data-slot=input]]:!px-3 [&_[data-slot=input]]:!text-[12px]'

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8!">
        <FormInputField
          type="text"
          form={form}
          name="email"
          label="Your email address"
          gapClass={fieldClass}
        />

        <TicketTypeDropdown form={form} />

        <PlatformDropdown form={form} />
        <FormInputField
          type="text"
          form={form}
          name="pan"
          label="PAN"
          gapClass={fieldClass}
        />
        <p className="-mt-4! mb-5! text-[11px]! leading-4 text-zinc-500">
          Mandatory to enter your Tax Filing PAN
        </p>

        <FormInputField
          type="text"
          form={form}
          name="subject"
          label="Subject"
          gapClass={fieldClass}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel className="text-[12px]! font-medium text-zinc-700">
                Description
              </FormLabel>

              <div className="overflow-hidden rounded-[2px] border border-zinc-300 bg-white">
                <SubmitRequestEditorToolbar />
                <FormControl>
                  <Textarea
                    className="min-h-[170px] rounded-none border-0 px-3! py-2! text-[12px]! shadow-none focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
              </div>

              <p className="mt-0.5! text-[11px]! leading-4 text-zinc-500">
                Please enter the details of your request. A member of our
                support staff will respond as soon as possible.
              </p>

              <FormMessage className="mt-0! text-[11px]!" />
            </FormItem>
          )}
        />

        <FormInputField
          type="text"
          form={form}
          name="mobileNumber"
          label="Mobile Number"
          gapClass={fieldClass}
        />

        <p className="mb-2! text-[12px]! font-medium text-zinc-700">
          Attachments (optional)
        </p>
        <FormProvider {...form}>
          <SubmitRequestFileUpload name="file" inputId="file-upload" />
        </FormProvider>

        <div className="pt-4!">
          <Button
            type="submit"
            className="h-9 w-full rounded-[3px] bg-[#0f7ce6] px-7! text-[12px]! font-semibold text-white hover:bg-[#086ed2]"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default SubmitRequestForm
