import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import { withStyle } from "./ExtensionStyle";

export const StyledParagraph = withStyle(Paragraph);
export const StyledHeading = withStyle(Heading);
export const StyledImage = withStyle(Image).configure({
  selectable: true,
  draggable: true,
});
export const StyledTable = withStyle(Table);
export const StyledTableRow = withStyle(TableRow);
export const StyledTableCell = withStyle(TableCell);
export const StyledTableHeader = withStyle(TableHeader);
