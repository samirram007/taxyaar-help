import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import { Link } from "@tiptap/extension-link";
import SubscriptExtension from "@tiptap/extension-subscript";
import SuperscriptExtension from "@tiptap/extension-superscript";
import { TextAlign } from "@tiptap/extension-text-align";
import { FontFamily, FontSize, TextStyle } from "@tiptap/extension-text-style";
import { Underline } from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { useCodeContext } from "../contexts/CodeContext";
import {
  StyledHeading,
  StyledParagraph,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  StyledTableRow,
} from "../ExtensionCss/ExtensionAllCss";
import { LinkWithImage } from "../ExtensionCss/ExtensionStyle";
import { ResizableImageNode } from "../ExtensionCss/ResizableImageNode";
import { StyledImage } from "../ExtensionCss/StyledImage";
import Alignment from "../toolbars/Alignment";
import CSSInput from "../toolbars/CSSInput";
import Design from "../toolbars/Design";
import FontFamilies from "../toolbars/FontFamilies";
import FontSizes from "../toolbars/FontSizes";
import Highlighters from "../toolbars/Highlighters";
import Linking from "../toolbars/Linking";
import Lists from "../toolbars/Lists";
import Menu from "../toolbars/Menu";
import Paragraph from "../toolbars/Paragraph";
import Sub_Super from "../toolbars/Sub_Super";
import ToolbarButton from "../toolbars/ToolbarButton/ToolbarButton";
import Undo_Redo from "../toolbars/Undo_Redo";


function EditorTab() {
  const { htmlCode, setHtmlCode } = useCodeContext() || {};

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: false,
        heading: false,
        table: false,
      } as any),
      StyledParagraph,
      StyledHeading,
      StyledImage,
      StyledTable,
      StyledTableRow,
      StyledTableCell,
      StyledTableHeader,
      Underline,
      TextStyle,
      Color,
      Link,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      FontFamily,
      FontSize,
      SubscriptExtension,
      SuperscriptExtension,
      Highlight,
      LinkWithImage,
      ResizableImageNode,
    ],
    content: htmlCode,
    onUpdate: ({ editor }) => {
      setHtmlCode?.(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && htmlCode != null && htmlCode !== editor.getHTML()) {
      editor.commands.setContent(htmlCode);
    }
  }, [htmlCode, editor]);

  if (!editor) return null;

  return (
    <div className="min-h-[inherit] rounded-lg border   shadow">
      <div className="flex flex-wrap gap-2 border-b p-2 items-center ">
        <ToolbarButton title="CSS">
          <CSSInput editor={editor} />
        </ToolbarButton>
        <Undo_Redo editor={editor} />

        <ToolbarButton title="Font Family">
          <FontFamilies editor={editor} />
        </ToolbarButton>
        <ToolbarButton title="Font Size">
          <FontSizes editor={editor} />
        </ToolbarButton>
        <Design editor={editor} />
        <Sub_Super editor={editor} />
        <ToolbarButton title="Paragraph">
          <Paragraph editor={editor} />
        </ToolbarButton>
        <ToolbarButton title="Link">
          <Linking editor={editor} />
        </ToolbarButton>
        <ToolbarButton title="Highlighter">
          <Highlighters editor={editor} />
        </ToolbarButton>
        <Alignment editor={editor} />
        <Lists editor={editor} />
        <ToolbarButton title="Menu">
          <Menu editor={editor} />
        </ToolbarButton>


      </div>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="min-h-[inherit] p-3 prose max-w-none dark:prose-invert focus:outline-none">
            <EditorContent editor={editor} className="article-body" />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className=" rounded-xl p-2 shadow-xl border bg-white/90 dark:bg-gray-900/95 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          <div className="grid grid-cols-2">
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <Paragraph editor={editor} />
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <FontFamilies editor={editor} />
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <ToolbarButton title="Font Size">
                <FontSizes editor={editor} />
              </ToolbarButton>
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <Design editor={editor} />
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <Sub_Super editor={editor} />
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <ToolbarButton title="Link">
                <Linking editor={editor} />
              </ToolbarButton>
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <ToolbarButton title="Highlighter">
                <Highlighters editor={editor} />
              </ToolbarButton>
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <Alignment editor={editor} />
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <Lists editor={editor} />
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <Menu editor={editor} />
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <ToolbarButton title="CSS">
                <CSSInput editor={editor} />
              </ToolbarButton>
            </ContextMenuItem>
            <ContextMenuItem
              inset
              className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/40 cursor-pointer transition"
            >
              <Undo_Redo editor={editor} />
            </ContextMenuItem>
          </div>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

export default EditorTab;
