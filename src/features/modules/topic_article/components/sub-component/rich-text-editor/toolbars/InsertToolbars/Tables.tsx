import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


interface TableInsertProps {
  editor: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Tables = ({ editor, open, onOpenChange }: TableInsertProps) => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [caption, setCaption] = useState("");

  const handleInsertTable = () => {
    if (rows > 0 && cols > 0) {
      let tableHtml = `<table style="width:100%; text-align:center;">`;
      if (caption.trim()) {
        tableHtml += `<caption>${caption}</caption>`;
      }
      tableHtml += `<tbody>`;
      for (let r = 0; r < rows; r++) {
        tableHtml += `<tr>`;
        for (let c = 0; c < cols; c++) {
          tableHtml += `<td><p></p></td>`;
        }
        tableHtml += `</tr>`;
      }
      tableHtml += `</tbody></table>`;
      editor.chain().focus().insertContent(tableHtml).run();
      setRows(3);
      setCols(3);
      setCaption("");
      onOpenChange(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Insert Table</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2 mt-2">
            <input
              type="number"
              placeholder="Rows"
              value={rows}
              min={1}
              onChange={(e) => setRows(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
            <input
              type="number"
              placeholder="Columns"
              value={cols}
              min={1}
              onChange={(e) => setCols(Number(e.target.value))}
              className="border rounded px-2 py-1 w-full"
            />
            <input
              type="text"
              placeholder="Caption (optional)"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleInsertTable}>Insert</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Tables;
