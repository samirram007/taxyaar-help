import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Strikethrough, UnderlineIcon } from "lucide-react";
import ToolbarButton from "./ToolbarButton/ToolbarButton";

const Design = ({ editor }: { editor: any }) => {
  return (
    <>
      <ToolbarButton title="Bold">
        <Toggle
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Toggle>
      </ToolbarButton>
      <ToolbarButton title="Italic">
        <Toggle
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Toggle>
      </ToolbarButton>
      <ToolbarButton title="Underline">
        <Toggle
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="h-4 w-4" />
        </Toggle>
      </ToolbarButton>
      <ToolbarButton title="Strikethrough">
        <Toggle
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
      </ToolbarButton>
    </>
  );
};

export default Design;
