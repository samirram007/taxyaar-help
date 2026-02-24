import useDialogState from '@/core/hooks/use-dialog-state'
import React, { useState } from 'react'
import type { TopicArticle } from '../data/schema'



type TopicArticleDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface TopicArticleContextType {
    open: TopicArticleDialogType | null
    setOpen: (str: TopicArticleDialogType | null) => void
    currentRow: TopicArticle | null
    setCurrentRow: React.Dispatch<React.SetStateAction<TopicArticle | null>>
    keyName: string
}

const TopicArticleContext = React.createContext<TopicArticleContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function TopicArticleProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<TopicArticleDialogType>(null)
    const [currentRow, setCurrentRow] = useState<TopicArticle | null>(null)


    return (
        <TopicArticleContext value={{ open, setOpen, currentRow, setCurrentRow, keyName: "topicarticle" }}>
            {children}
        </TopicArticleContext>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTopicArticle = () => {
    const topicarticleContext = React.useContext(TopicArticleContext)

    if (!topicarticleContext) {
        throw new Error('useTopicArticle has to be used within <TopicArticleContext>')
    }

    return topicarticleContext
}
