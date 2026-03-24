export type SubmitRequestFormData = {
  email: string
  type: string
  channel: string
  pan: string
  subject: string
  description: string
  mobile: string
  attachments: File[]
}

export type SelectOption = {
  value: string
  label: string
}

export const initSubRequestFormData: SubmitRequestFormData = {
  email: '',
  type: '',
  channel: '',
  pan: '',
  subject: '',
  description: '',
  mobile: '',
  attachments: [],
}

export const typeOptions: SelectOption[] = [
  { value: 'itr', label: 'ITR Filing Support' },
  { value: 'payment', label: 'Payment Issue' },
  { value: 'other', label: 'Other' },
]

export const channelOptions: SelectOption[] = [
  { value: 'web', label: 'Web' },
  { value: 'app', label: 'App' },
]
