import { DataTableRowActions } from "@/features/global/components/data-table/data-table-row-actions"
import { useNavigate } from "@tanstack/react-router"
import type { Row } from "@tanstack/react-table"
import { useTopicArticle } from "../contexts/topic_article-context"
import type { TopicArticle } from "../data/schema"

import { Route as TopicArticleDetailRoute } from '@/routes/help-center/_layout/topic_article/_layout/$slug'

interface DataTableRowActionsProps {
    row: Row<TopicArticle>
}

const RowActions = (props: DataTableRowActionsProps) => {
    const navigate = useNavigate()
    const { setOpen, currentRow, setCurrentRow } = useTopicArticle()
    const { row } = props
    return (
        <DataTableRowActions<TopicArticle>
            row={row}
            onEdit={(data) => {
                setCurrentRow(data)
                console.log("row Action: ", currentRow)
                navigate({
                    to: TopicArticleDetailRoute.to,
                    params: { id: data.id! },
                })

            }}
            onDelete={(data) => {
                setCurrentRow(data)
                setOpen("delete")
            }}
        />
    )
}

export default RowActions