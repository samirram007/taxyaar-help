import { Redo, Undo } from "lucide-react";

import { Button } from "@/components/ui/button";
import ToolbarButton from "./ToolbarButton/ToolbarButton";

const Undo_Redo = ({ editor }: { editor: any }) => {
  return (
    <>
      <div className="ml-auto flex gap-2">
        <ToolbarButton title="Undo">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().undo().run()}
          >
            <Undo className="h-4 w-4" />
          </Button>
        </ToolbarButton>
        <ToolbarButton title="Redo">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => editor.chain().focus().redo().run()}
          >
            <Redo className="h-4 w-4" />
          </Button>
        </ToolbarButton>
      </div>
    </>
  );
};

export default Undo_Redo;
