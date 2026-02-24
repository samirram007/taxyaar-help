import { Button } from "@/components/ui/button";
import { Highlighter } from "lucide-react";

const Highlighters = ({ editor }: { editor: any }) => {
  const handleClick = () => {
    const isActive = editor.isActive("highlight");
    if (isActive) {
      editor.chain().focus().unsetHighlight().run();
    } else {
      editor.chain().focus().setHighlight({ color: "#FFFF00" }).run();
    }
  };
  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleClick}
        className={editor.isActive("highlight") ? "bg-yellow-200" : ""}
      >
        <Highlighter className="h-4 w-4" />
      </Button>
    </>
  );
};

export default Highlighters;
