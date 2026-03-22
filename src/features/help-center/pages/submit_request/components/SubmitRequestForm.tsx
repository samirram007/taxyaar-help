import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {Select,SelectContent,SelectItem,SelectTrigger, SelectValue,} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import SubmitRequestField from './SubmitRequestField'
import SubmitRequestEditorToolbar from './SubmitRequestEditorToolbar'
import SubmitRequestFileUpload from './SubmitRequestFileUpload'
import {channelOptions,initSubRequestFormData,type SubmitRequestFormData,typeOptions,} from '../data/types'

const fieldInputClassName =
  '!h-9 !rounded-[2px] !border !border-zinc-300 !bg-white !text-zinc-800 placeholder:!text-zinc-400 !shadow-none focus-visible:!border-blue-500 focus-visible:!ring-2 focus-visible:!ring-blue-100'

const selectTriggerClassName =
  '!h-9 !w-full !rounded-[2px] !border !border-zinc-300 !bg-white !text-zinc-800 !shadow-none focus-visible:!border-blue-500 focus-visible:!ring-2 focus-visible:!ring-blue-100'

function SubmitRequestForm() {
  const [formData, setFormData] = useState<SubmitRequestFormData>(
    initSubRequestFormData,
  )
  const [fileName, setFileName] = useState('')

  const updateField = <K extends keyof SubmitRequestFormData>(
    key: K,
    value: SubmitRequestFormData[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    updateField(name as keyof SubmitRequestFormData, value)
  }

  const handleSelectChange = (field: 'type' | 'channel', value: string) => {
    updateField(field, value)
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (!files || files.length === 0) {
      setFileName('')
      updateField('attachments', [])
      return
    }

    setFileName(files[0].name)
    updateField('attachments', Array.from(files))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      <SubmitRequestField label="Your email address" htmlFor="email">
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={fieldInputClassName}
          autoComplete="email"
        />
      </SubmitRequestField>

      <SubmitRequestField
        label="Select Type"
        htmlFor="type"
        hint="Select the type of ticket"
      >
        <Select
          value={formData.type}
          onValueChange={(value) => handleSelectChange('type', value)}
        >
          <SelectTrigger id="type" className={selectTriggerClassName}>
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            {typeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SubmitRequestField>

      <SubmitRequestField label="Are you Filing through Web / App?" htmlFor="channel">
        <Select
          value={formData.channel}
          onValueChange={(value) => handleSelectChange('channel', value)}
        >
          <SelectTrigger id="channel" className={selectTriggerClassName}>
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            {channelOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SubmitRequestField>

      <SubmitRequestField
        label="PAN"
        htmlFor="pan"
        hint="Mandatory to enter your Tax Filing PAN"
      >
        <Input
          type="text"
          id="pan"
          name="pan"
          value={formData.pan}
          onChange={handleInputChange}
          className={`${fieldInputClassName} !uppercase`}
          maxLength={10}
        />
      </SubmitRequestField>

      <SubmitRequestField label="Subject" htmlFor="subject">
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={fieldInputClassName}
        />
      </SubmitRequestField>

      <SubmitRequestField
        label="Description"
        htmlFor="description"
        hint="Please enter the details of your request. A member of our support staff will respond as soon as possible."
      >
        <div className="overflow-hidden rounded-[2px] border border-zinc-300 bg-white">
          <SubmitRequestEditorToolbar />
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="!min-h-[128px] resize-y !rounded-none !border-0 !bg-white !text-zinc-800 placeholder:!text-zinc-400 !shadow-none focus-visible:!ring-0"
          />
        </div>
      </SubmitRequestField>

      <SubmitRequestField label="Mobile Number" htmlFor="mobile">
        <Input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          className={fieldInputClassName}
          autoComplete="tel"
        />
      </SubmitRequestField>

      <SubmitRequestField label="Attachments (optional)">
        <SubmitRequestFileUpload
          inputId="submit-request-file-upload"
          fileName={fileName}
          onChange={handleFileChange}
        />
      </SubmitRequestField>

      <Button
        type="submit"
        className="!mt-6 !h-9 !w-full rounded-[2px] bg-blue-600 px-7 text-sm font-medium text-white hover:bg-blue-700"
      >
        Submit
      </Button>
    </form>
  )
}

export default SubmitRequestForm
