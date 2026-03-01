'use client'

import { Button } from '@/components/ui/button'
import {
    Form
} from '@/components/ui/form'


import FormInputField from '@/components/form-input-field'
import { Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Route as TopicArticleRoute } from '@/routes/help-center/_layout/topic_article/_layout'
import { lowerCase } from '@/utils/removeEmptyStrings'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from '@tanstack/react-router'


import { ChevronRightIcon, Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import slugify from 'slugify'
import { useTopicArticleMutation } from '../data/queryOptions'
import { formSchema, type TopicArticle, type TopicArticleForm } from '../data/schema'

import { TopicSectionCombobox } from './sub-component/topic_section-combo-box'

import { Route as HelpCenterRouteTo } from '@/routes/help-center/_layout'
import { Route as TopicArticleRouteTo } from '@/routes/help-center/_layout/topic_article/_layout'
interface Props {
    currentRow?: TopicArticle
}
export function FormAction({ currentRow }: Props) {
    const isEdit = !!currentRow
    const navigate = useNavigate();

    const { mutate: saveTopicArticle, isPending } = useTopicArticleMutation()

    const form = useForm<TopicArticleForm>({
        resolver: zodResolver(formSchema),
        defaultValues: isEdit
            ? { ...currentRow, isEdit }
            : {
                title: '',
                slug: '',
                status: 'active',
                description: undefined,
                isMarked: false,
                content: 'Content here ...',
                topicSectionId: 1,
                isEdit,
            },
    })
    //  const topicarticleStatusOptions: ActiveInactiveStatus[] = ['active', 'inactive'];
    const gapClass = 'grid grid-cols-[120px_1fr] gap-4'
    const moduleName = "Article"
    const title = form.watch('title')

    const topicSectionId = form.watch('topicSectionId')
    const onSubmit = (values: TopicArticleForm) => {
        console.log("here: ", values)
        //form.reset()
        saveTopicArticle(
            currentRow ? { ...values, id: currentRow.id! } : values,
            {
                onSuccess: () => {
                    navigate({ to: TopicArticleRoute.to, })
                },
            }
        )

    }
    useEffect(() => {
        if (title) {
            const generatedSlug = slugify(title, { lower: true, strict: true })
            form.setValue('slug', topicSectionId.toString().padStart(4, '0') + "-" + generatedSlug, { shouldValidate: true })
        }
    }, [title, form.setValue])

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
                        <Link to={TopicArticleRouteTo.to} className='text-blue-600 hover:underline flex flex-row items-center gap-2'  >
                            <ChevronRightIcon size={12} />  Articles </Link>
                    </p>
                </DialogDescription>
            </DialogHeader>



            <div className='grid grid-cols-1 gap-4  h-full max-w-full  overflow-y-auto py-4 '>
                <div>

                    <Form {...form}>
                        <form
                            id='user-form'
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-4 p-0.5'
                        >
                            <div className='grid grid-rows-[200px_1fr] grid-cols-1 gap-4  h-full max-w-full  overflow-y-auto py-4 '>


                                <div className='grid grid-cols-[1fr_500px] gap-12'>
                                    <div className='space-y-4'>
                                        <TopicSectionCombobox form={form} />



                                        <FormInputField type='text' gapClass={gapClass} form={form} name='title' label='Title' />
                                        <FormInputField type='text' gapClass={gapClass} form={form} name='slug' label='Slug' disabled={true} />
                                        <FormInputField type='textarea' gapClass={'hidden'} form={form} name='content' label='Content' />


                                    </div>
                                    <div className='space-y-4'>
                                        <FormInputField type='checkbox' gapClass={gapClass} form={form} name='isMarked' label='Marked(*)' />

                                        <FormInputField type='checkbox' form={form} name='status' label='Status' options={[
                                            { label: 'Active', value: 'active' },
                                            { label: 'Inactive', value: 'inactive' },
                                        ]} />
                                        <div className='flex flex-row justify-end! py-4 border-t-2 border-orange-900/50 max-w-full w-full text-center'>

                                            <Button type='submit' className='self-center' form='user-form'
                                                disabled={isPending}>
                                                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                                {isPending ? "Saving..." : "Save changes"}
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                                <div className="card min-h-64 w-full col-span-2">

                                    {/* <TiptapEditor form={form} /> */}

                                </div>
                            </div>



                        </form>
                    </Form>
                    <DialogFooter className='sm:hidden flex flex-row justify-end! py-4 border-t-2 border-orange-900/50 max-w-full w-full text-center'>

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