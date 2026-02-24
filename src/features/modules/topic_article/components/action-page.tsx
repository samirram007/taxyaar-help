'use client'


import type { TopicArticle } from '../data/schema'
import { FormAction } from './form-action'


interface Props {
    currentRow?: TopicArticle
}

export function ActionPages({ currentRow }: Props) {

    return <FormAction currentRow={currentRow} />

}
