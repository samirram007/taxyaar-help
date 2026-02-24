import { Link } from "@tiptap/extension-link";

export function withStyle(extension: any) {
  return extension.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        style: {
          default: null,
          parseHTML: (element: HTMLElement) => element.getAttribute("style"),
          renderHTML: (attributes: any) => {
            if (!attributes.style) return {};
            return { style: attributes.style };
          },
        },
      };
    },
  });
}

export const LinkWithImage = Link.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["text", "image"],
    };
  },
});
