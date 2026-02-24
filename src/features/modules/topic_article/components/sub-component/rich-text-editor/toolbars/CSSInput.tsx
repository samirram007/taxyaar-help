import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CSSInput = ({ editor }: { editor: any }) => {
  const [open, setOpen] = useState(false);
  const [css, setCss] = useState("");

  if (!editor) return null;

  const applyCss = () => {
    if (!css.trim()) return;
    const { state } = editor;
    const { $from } = state.selection;
    const parentNode = $from.parent;
    if (parentNode && parentNode.type) {
      console.log("Applying CSS to:", parentNode.type.name, "with:", css);
      editor
        .chain()
        .focus()
        .updateAttributes(parentNode.type.name, { style: css })
        .run();
    } else {
      console.log("Applying textStyle with CSS:", css);
      editor.chain().focus().setMark("textStyle", { style: css }).run();
    }
    setCss("");
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="flex items-center gap-1"
          >
            CSS
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Apply Custom CSS</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-2">
            <label className="text-sm font-medium">
              CSS Styles (e.g. <code>border: 1px solid red; padding: 5px;</code>
              )
            </label>
            <Input
              placeholder="Enter CSS styles"
              value={css}
              onChange={(e) => setCss(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)} variant="secondary">
              Cancel
            </Button>
            <Button onClick={applyCss}>Apply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CSSInput;
