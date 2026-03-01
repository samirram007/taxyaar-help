import { DataTableRowActions } from "@/features/global/components/data-table/data-table-row-actions"
import { useNavigate } from "@tanstack/react-router"
import type { Row } from "@tanstack/react-table"
import { useTopicSection } from "../contexts/topic_section-context"
import type { TopicSection } from "../data/schema"

import { Route as TopicSectionDetailRoute } from '@/routes/help-center/_layout/topic_section/_layout/$slug'

interface DataTableRowActionsProps {
    row: Row<TopicSection>
}

const RowActions = (props: DataTableRowActionsProps) => {
    const navigate = useNavigate()
    const { setOpen, currentRow, setCurrentRow } = useTopicSection()
    const { row } = props
    return (
        <DataTableRowActions<TopicSection>
            row={row}
            onEdit={(data) => {
                setCurrentRow(data)
                console.log("row Action: ", currentRow)
                navigate({
                    to: TopicSectionDetailRoute.to,
                    params: { slug: data.slug! },
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