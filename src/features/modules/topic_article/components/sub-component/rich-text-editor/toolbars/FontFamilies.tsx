import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FontFamilies = ({ editor }: { editor: any }) => {
  const handleChange = (value: string) => {
    if (value === "default") {
      editor.chain().focus().unsetFontFamily().run();
    } else {
      editor.chain().focus().setFontFamily(value).run();
    }
  };

  return (
    <>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Arial" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="arial">Arial</SelectItem>
          <SelectItem value="times">Times New Roman</SelectItem>
          <SelectItem value="serif">Serif</SelectItem>
          <SelectItem value="monospace">Monospace</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default FontFamilies;
