import useDialogState from '@/core/hooks/use-dialog-state'
import React, { useState } from 'react'
import type { TopicCategory } from '../data/schema'



type TopicCategoryDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface TopicCategoryContextType {
    open: TopicCategoryDialogType | null
    setOpen: (str: TopicCategoryDialogType | null) => void
    currentRow: TopicCategory | null
    setCurrentRow: React.Dispatch<React.SetStateAction<TopicCategory | null>>
    keyName: string
}

const TopicCategoryContext = React.createContext<TopicCategoryContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function TopicCategoryProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<TopicCategoryDialogType>(null)
    const [currentRow, setCurrentRow] = useState<TopicCategory | null>(null)


    return (
        <TopicCategoryContext value={{ open, setOpen, currentRow, setCurrentRow, keyName: "topiccategory" }}>
            {children}
        </TopicCategoryContext>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTopicCategory = () => {
    const topiccategoryContext = React.useContext(TopicCategoryContext)

    if (!topiccategoryContext) {
        throw new Error('useTopicCategory has to be used within <TopicCategoryContext>')
    }

    return topiccategoryContext
}
