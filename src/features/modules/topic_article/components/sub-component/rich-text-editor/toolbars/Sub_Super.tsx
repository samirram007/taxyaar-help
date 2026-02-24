import { Subscript, Superscript } from "lucide-react";

import { Button } from "@/components/ui/button";
import ToolbarButton from "./ToolbarButton/ToolbarButton";

const Sub_Super = ({ editor }: { editor: any }) => {
  return (
    <>
      <ToolbarButton title="Subscript">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={editor.isActive("subscript") ? "bg-gray-200" : ""}
        >
          <Subscript className="h-4 w-4" />
        </Button>
      </ToolbarButton>
      <ToolbarButton title="Superscript">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={editor.isActive("superscript") ? "bg-gray-200" : ""}
        >
          <Superscript className="h-4 w-4" />
        </Button>
      </ToolbarButton>
    </>
  );
};

export default Sub_Super;
