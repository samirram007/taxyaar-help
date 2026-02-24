'use client'


import type { TopicSection } from '../data/schema'
import { FormAction } from './form-action'


interface Props {
    currentRow?: TopicSection
}

export function ActionPages({ currentRow }: Props) {

    return <FormAction currentRow={currentRow} />

}
