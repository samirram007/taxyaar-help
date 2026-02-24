import Image from "@tiptap/extension-image";
import { withStyle } from "./ExtensionStyle";

export const StyledImage = withStyle(
  Image.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        link: { default: null },
      };
    },
    renderHTML({ HTMLAttributes }) {
      const { link, ...attrs } = HTMLAttributes;
      if (link) {
        return ["a", { href: link, target: "_blank" }, ["img", attrs]];
      }
      return ["img", attrs];
    },
  })
);
