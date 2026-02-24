import useDialogState from '@/core/hooks/use-dialog-state'
import React, { useState } from 'react'
import type { TopicSection } from '../data/schema'



type TopicSectionDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface TopicSectionContextType {
    open: TopicSectionDialogType | null
    setOpen: (str: TopicSectionDialogType | null) => void
    currentRow: TopicSection | null
    setCurrentRow: React.Dispatch<React.SetStateAction<TopicSection | null>>
    keyName: string
}

const TopicSectionContext = React.createContext<TopicSectionContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function TopicSectionProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<TopicSectionDialogType>(null)
    const [currentRow, setCurrentRow] = useState<TopicSection | null>(null)


    return (
        <TopicSectionContext value={{ open, setOpen, currentRow, setCurrentRow, keyName: "topicsection" }}>
            {children}
        </TopicSectionContext>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTopicSection = () => {
    const topicsectionContext = React.useContext(TopicSectionContext)

    if (!topicsectionContext) {
        throw new Error('useTopicSection has to be used within <TopicSectionContext>')
    }

    return topicsectionContext
}
