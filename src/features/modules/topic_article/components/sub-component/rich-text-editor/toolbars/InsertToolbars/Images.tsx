import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageInsertProps {
  editor: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Images = ({ editor, open, onOpenChange }: ImageInsertProps) => {
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState(" ");
  const [caption, setCaption] = useState(" ");
  const [width, setWidth] = useState("300");
  const [height, setHeight] = useState("200");

  const handleInsertImage = () => {
    if (!editor || !url) return;

    editor
      .chain()
      .focus()
      .insertContent({
        type: "resizableImage",
        attrs: {
          src: url,
          alt,
          caption,
          width: parseInt(width) || 300,
          height: parseInt(height) || 200,
        },
      })
      .run();
    setUrl("");
    setAlt("");
    setCaption("");
    setWidth("300");
    setHeight("200");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Insert Image</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-2">
          <input
            type="text"
            placeholder="Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
          <input
            type="text"
            placeholder="Alt text (optional)"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
          <input
            type="number"
            placeholder="Width (px)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
          <input
            type="number"
            placeholder="Height (px)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
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
          <Button onClick={handleInsertImage}>Insert</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Images;
