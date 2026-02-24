'use client'


import type { TopicCategory } from '../data/schema'
import { FormAction } from './form-action'


interface Props {
    currentRow?: TopicCategory
}

export function ActionPages({ currentRow }: Props) {

    return <FormAction currentRow={currentRow} />

}
