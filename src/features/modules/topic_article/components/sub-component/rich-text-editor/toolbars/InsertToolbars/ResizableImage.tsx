import React, { useState } from "react";
import { NodeViewWrapper } from "@tiptap/react";

const ResizableImage = ({ node, updateAttributes }: any) => {
  const { src, alt, title, width, height } = node.attrs;
  const [size, setSize] = useState({ width, height });

  const onResize = (e: React.MouseEvent<HTMLDivElement>) => {
    const newWidth = e.currentTarget.offsetWidth;
    const newHeight = e.currentTarget.offsetHeight;
    setSize({ width: newWidth, height: newHeight });
    updateAttributes({ width: newWidth, height: newHeight });
  };

  return (
    <NodeViewWrapper className="resizable-image">
      <div
        style={{
          display: "inline-block",
          resize: "both",
          overflow: "hidden",
          width: size.width,
          height: size.height,
        }}
        onMouseUp={onResize}
      >
        <img
          src={src}
          alt={alt}
          title={title}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </NodeViewWrapper>
  );
};

export default ResizableImage;
