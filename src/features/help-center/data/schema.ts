import { z } from 'zod';





export const helpCenterSchema = z.object({
  id: z.number().int().positive().nullish(),
  name: z.string().min(1),
  mailingName: z.string().min(1),
  code: z.string().min(1),
  address: z.string().nullish(),
  phoneNo: z.string().nullish(),
  mobileNo: z.string().nullish(),
  email: z.string().nullish(),
  website: z.string().nullish(),
  cinNo: z.string().nullish(),
  tinNo: z.string().nullish(),
  tanNo: z.string().nullish(),
  gstNo: z.string().nullish(),
  panNo: z.string().nullish(),
  city: z.string().nullish(),
  countryId: z.number().int().positive().nullish(),
  stateId: z.number().int().positive().nullish(),
  currencyId: z.number().int().positive().nullish(),


})
export type HelpCenter = z.infer<typeof helpCenterSchema>
export const helpCenterListSchema = z.array(helpCenterSchema)
export type HelpCenterList = z.infer<typeof helpCenterListSchema>



export const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Name is required.' }),
    code: z
      .string()
      .min(1, { message: 'Role is required.' }),
    mailingName: z.string().min(1),

    status: z
      .string()
      .min(1, { message: 'Status is required.' }),
    description: z.string().optional(),

    address: z.string().nullish(),
    city: z.string().nullish(),
    zipCode: z.string().nullish(),
    phoneNo: z.string().nullish(),
    mobileNo: z.string().nullish(),
    email: z.string().nullish(),
    website: z.string().nullish(),
    cinNo: z.string().nullish(),
    tinNo: z.string().nullish(),
    tanNo: z.string().nullish(),
    gstNo: z.string().nullish(),
    panNo: z.string().nullish(),


    countryId: z.number().int().positive().nullish(),
    stateId: z.number().int().positive().nullish(),
    currencyId: z.number().int().positive().nullish(),
    isEdit: z.boolean(),
  })

export type HelpCenterForm = z.infer<typeof formSchema>