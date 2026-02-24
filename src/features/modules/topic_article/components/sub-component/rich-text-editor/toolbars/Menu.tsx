import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Image as ImageIcon, Table as TableIcon } from "lucide-react";
import { useState } from "react";
import Images from "./InsertToolbars/Images";
import Tables from "./InsertToolbars/Tables";

const Menu = ({ editor }: { editor: any }) => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Insert" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="image">
            <div className="flex items-center">
              <ImageIcon className="h-4 w-4 mr-2" />
              Image
            </div>
          </SelectItem>
          <SelectItem value="table">
            <div className="flex items-center">
              <TableIcon className="h-4 w-4 mr-2" />
              Table
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <Images
        editor={editor}
        open={value === "image"}
        onOpenChange={(open) => !open && setValue("")}
      />
      <Tables
        editor={editor}
        open={value === "table"}
        onOpenChange={(open) => !open && setValue("")}
      />
    </>
  );
};

export default Menu;
