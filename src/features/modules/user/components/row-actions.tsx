import { DataTableRowActions } from "@/features/global/components/data-table/data-table-row-actions"

import type { Row } from "@tanstack/react-table"
import { useUser } from "../contexts/user-context"
import type { User } from "../data/schema"



interface DataTableRowActionsProps {
    row: Row<User>
}

const RowActions = (props: DataTableRowActionsProps) => {

    const { setOpen, currentRow, setCurrentRow } = useUser()
    const { row } = props
    return (
        <DataTableRowActions<User>
            row={row}
            onEdit={(data) => {
                setCurrentRow(data)
                console.log("row Action: ", currentRow)

            }}
            onDelete={(data) => {
                setCurrentRow(data)
                setOpen("delete")
            }}
        />
    )
}

export default RowActions