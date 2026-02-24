import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LinkIcon } from "lucide-react";
import { useState } from "react";

const Linking = ({ editor }: { editor: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");

  const handleClick = () => {
    if (!editor) return;
    if (url === "") {
      editor.chain().focus().unsetLink().run();
      const { selection } = editor.state;
      if (selection.node?.type.name === "image") {
        editor.chain().focus().updateAttributes("image", { link: null }).run();
      }
      setIsOpen(false);
      return;
    }
    const { selection } = editor.state;
    if (selection.node?.type.name === "image") {
      editor.chain().focus().updateAttributes("image", { link: url }).run();
    } else {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
    setUrl("");
    setIsOpen(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className={
          editor.isActive("link") || editor?.isActive("image")
            ? "bg-gray-200"
            : ""
        }
      >
        <LinkIcon className="h-4 w-4" />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Enter Url</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2 mt-2">
            <input
              type="text"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleClick}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Linking;
