import { Button } from "@/components/ui/button";
import { List, ListOrdered } from "lucide-react";
import ToolbarButton from "./ToolbarButton/ToolbarButton";

const Lists = ({ editor }: { editor: any }) => {
  if (!editor) return null; // editor not ready yet
  return (
    <>
      <ToolbarButton title="Bullets">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </Button>
      </ToolbarButton>
      <ToolbarButton title="Numbers">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
      </ToolbarButton>
    </>
  );
};

export default Lists;
