import { DataTableRowActions } from "@/features/global/components/data-table/data-table-row-actions"
import { useNavigate } from "@tanstack/react-router"
import type { Row } from "@tanstack/react-table"
import { useTopicCategory } from "../contexts/topic_category-context"
import type { TopicCategory } from "../data/schema"

import { Route as TopicCategoryDetailRoute } from '@/routes/help-center/_layout/topic_category/_layout/$id'

interface DataTableRowActionsProps {
    row: Row<TopicCategory>
}

const RowActions = (props: DataTableRowActionsProps) => {
    const navigate = useNavigate()
    const { setOpen, currentRow, setCurrentRow } = useTopicCategory()
    const { row } = props
    return (
        <DataTableRowActions<TopicCategory>
            row={row}
            onEdit={(data) => {
                setCurrentRow(data)
                console.log("row Action: ", currentRow)
                navigate({
                    to: TopicCategoryDetailRoute.to,
                    params: { id: data.id!.toString() },
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