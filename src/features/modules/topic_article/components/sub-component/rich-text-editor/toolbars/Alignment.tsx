import { Button } from "@/components/ui/button";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import ToolbarButton from "./ToolbarButton/ToolbarButton";

const Alignment = ({ editor }: { editor: any }) => {
  return (
    <>
      <ToolbarButton title="Align Left">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
      </ToolbarButton>
      <ToolbarButton title="Center">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
      </ToolbarButton>
      <ToolbarButton title="Align Right">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight className="h-4 w-4" />
        </Button>
      </ToolbarButton>
      <ToolbarButton title="Justify">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <AlignJustify className="h-4 w-4" />
        </Button>
      </ToolbarButton>
    </>
  );
};

export default Alignment;
