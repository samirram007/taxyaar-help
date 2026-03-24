'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import FormInputField from '@/components/form-input-field'

import SubmitRequestFileUpload from './SubmitRequestFileUpload'

import { ticketFormSchema, type TicketForm } from '../data/schema'
import TicketTypeDropdown from './TicketTypeDropdown'
import PlatformDropdown from './PlatformDropdown'
import { useTicketMasterMutation } from '../data/queryOptions'


function SubmitRequestForm() {

  const { mutate } = useTicketMasterMutation();

  const form = useForm<TicketForm>({
    resolver: zodResolver(ticketFormSchema) as any,
    defaultValues: {
      email: '',
      ticketTypeId: 0,
      platform: 'web',
      pan: '',
      subject: '',
      description: '',
      mobileNumber: '',
      file: undefined,
    },
  });

  const onSubmit = (values: TicketForm) => {
    mutate(values, {
      onSuccess: () => {
        form.reset();
      },
    });
  };
  const gapClass = '!grid !grid-rows-[10px_1fr] gap-4'

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >

        <FormInputField
          type="text"
          form={form}
          name="email"
          gapClass={gapClass}
        />


        <TicketTypeDropdown form={form} />

        <PlatformDropdown form={form} />

        {/* PAN */}
        <FormInputField
          type="text"
          form={form}
          name="pan"
          label="PAN"
        />

        {/* SUBJECT */}
        <FormInputField
          type="text"
          form={form}
          name="subject"
          label="Subject"
        />

        <FormInputField
          form={form}
          name="description"
          type="textarea"
          label="Description"
        />

        {/* MOBILE */}
        <FormInputField
          type="text"
          form={form}
          name="mobileNumber"
          label="Mobile Number"
        />

        <FormProvider {...form}>
          <SubmitRequestFileUpload name="file" inputId="file-upload" />
        </FormProvider>



        <div className="pt-4">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default SubmitRequestForm