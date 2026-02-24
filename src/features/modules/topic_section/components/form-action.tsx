'use client'

import { Button } from '@/components/ui/button'
import {
    Form
} from '@/components/ui/form'


import FormInputField from '@/components/form-input-field'
import { Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Route as TopicSectionRoute } from '@/routes/help-center/_layout/topic_section/_layout'
import { lowerCase } from '@/utils/removeEmptyStrings'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from '@tanstack/react-router'
import { ChevronRightIcon, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useTopicSectionMutation } from '../data/queryOptions'
import { formSchema, type TopicSection, type TopicSectionForm } from '../data/schema'

import { Route as HelpCenterRouteTo } from '@/routes/help-center/_layout'
import { Route as TopicSectionRouteTo } from '@/routes/help-center/_layout/topic_section/_layout'
import { useEffect } from 'react'
import slugify from 'slugify'
import { TopicCategoryCombobox } from './sub-component/topic_category-combo-box'
interface Props {
    currentRow?: TopicSection
}
export function FormAction({ currentRow }: Props) {
    const isEdit = !!currentRow
    const navigate = useNavigate();

    const { mutate: saveTopicSection, isPending } = useTopicSectionMutation()

    const form = useForm<TopicSectionForm>({
        resolver: zodResolver(formSchema),
        defaultValues: isEdit
            ? { ...currentRow, isEdit }
            : {
                name: '',
                slug: '',
                status: 'active',
                description: undefined,
                isMarked: false,
                topicCategoryId: 1,
                isEdit,
            },
    })
    //  const topicsectionStatusOptions: ActiveInactiveStatus[] = ['active', 'inactive'];
    const gapClass = 'grid grid-cols-[120px_1fr] gap-4'
    const moduleName = "TopicSection"
    const name = form.watch('name')
    const topicCategoryId = form.watch('topicCategoryId')
    const onSubmit = (values: TopicSectionForm) => {
        console.log("here: ", values)
        form.reset()
        saveTopicSection(
            currentRow ? { ...values, id: currentRow.id! } : values,
            {
                onSuccess: () => {
                    navigate({ to: TopicSectionRoute.to, })
                },
            }
        )

    }
    useEffect(() => {
        if (name) {
            const generatedSlug = slugify(name, { lower: true, strict: true })
            form.setValue('slug', topicCategoryId.toString().padStart(4, '0') + "-" + generatedSlug, { shouldValidate: true })
        }
    }, [name, form.setValue])

    return (


        <Dialog>

            <DialogHeader className='text-left'>
                <DialogTitle>{isEdit ? 'Edit ' : 'Add New '} {moduleName}</DialogTitle>
                <DialogDescription>
                    {isEdit ? `Update the ${lowerCase(moduleName)} here. `
                        : `Create new ${lowerCase(moduleName)} here. `}
                    Click save when you&apos;re done.
                    <p className='text-muted-foreground flex flex-row items-center gap-2'>
                        <Link to={HelpCenterRouteTo.to} className='text-blue-600 hover:underline flex flex-row items-center gap-2'  >  Help Center </Link>
                        <Link to={TopicSectionRouteTo.to} className='text-blue-600 hover:underline flex flex-row items-center gap-2'  >
                            <ChevronRightIcon size={12} />  Sections </Link>
                    </p>
                </DialogDescription>
            </DialogHeader>



            <div className='grid grid-cols-2 gap-4  h-full max-w-full  overflow-y-auto py-4 '>
                <div>

                    <Form {...form}>
                        <form
                            id='user-form'
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-4 p-0.5'
                        >
                            <div className='grid grid-cols-1 gap-4'>
                                <div className='space-y-4'>
                                    <TopicCategoryCombobox form={form} />
                                    <FormInputField type='text' gapClass={gapClass} form={form} name='name' label='Name' />
                                    <FormInputField type='text' gapClass={gapClass} form={form} name='slug' label='Slug' disabled={true} />
                                    <FormInputField type='textarea' gapClass={gapClass} form={form} name='description' label='Description' />

                                    <FormInputField type='checkbox' gapClass={gapClass} form={form} name='isMarked' label='Marked(*)' />

                                    <FormInputField type='checkbox' form={form} name='status' label='Status' options={[
                                        { label: 'Active', value: 'active' },
                                        { label: 'Inactive', value: 'inactive' },
                                    ]} />
                                </div>
                                <div className='space-y-4'>


                                </div>
                            </div>






                        </form>
                    </Form>
                    <DialogFooter className='flex flex-row justify-end! py-4 border-t-2 border-orange-900/50 max-w-full w-full text-center'>

                        <Button type='submit' className='self-center' form='user-form'
                            disabled={isPending}>
                            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isPending ? "Saving..." : "Save changes"}
                        </Button>
                    </DialogFooter>
                </div>

            </div>




        </Dialog>
    )
}