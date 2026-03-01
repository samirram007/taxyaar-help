

import type { Row } from "@tanstack/react-table"




import type { TopicCategory } from "../data/schema"



interface DataTableRowActionsProps {
    row: Row<TopicCategory>
}

const RowActions = (props: DataTableRowActionsProps) => {
    // const navigate = useNavigate()
    // const { setOpen, currentRow, setCurrentRow } = useTopicCategory()
    const { row } = props
    console.log(row)
    return (
        <div className="flex items-center gap-2">
            {/* <Button variant="ghost" size="icon" onClick={() => {
                setCurrentRow(row.original)
                setOpen('edit')
            }}>
                <IconEdit size={16} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => {
                setCurrentRow(row.original)
                setOpen('delete')
            }}>
                <IconTrash size={16} />
            </Button> */}
        </div>
    )
}

export default RowActions