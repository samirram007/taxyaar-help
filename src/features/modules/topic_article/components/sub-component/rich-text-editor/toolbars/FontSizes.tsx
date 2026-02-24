import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const FontSizes = ({ editor }: { editor: any }) => {
  const [currentSize, setCurrentSize] = useState("16");

  useEffect(() => {
    if (!editor) return;
    const updateSize = () => {
      const size = editor
        .getAttributes("textStyle")
        .fontSize?.replace("px", "");
      setCurrentSize(size || "16");
    };
    editor.on("selectionUpdate", updateSize);
    editor.on("transaction", updateSize);
    updateSize();
    return () => {
      editor.off("selectionUpdate", updateSize);
      editor.off("transaction", updateSize);
    };
  }, [editor]);

  const setSize = (size: number) => {
    if (size < 8) return;
    editor.chain().focus().setFontSize(`${size}px`).run();
  };

  return (
    <>
      <div className="flex items-center border rounded">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setSize(Number(currentSize) - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="px-2 text-sm">{currentSize}</span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setSize(Number(currentSize) + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default FontSizes;
