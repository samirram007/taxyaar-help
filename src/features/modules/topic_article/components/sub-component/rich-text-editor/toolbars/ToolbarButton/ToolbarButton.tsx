import type { ReactNode } from "react";

interface ToolbarButtonProps {
  title: string;
  children: ReactNode;
}

export default function ToolbarButton({ title, children }: ToolbarButtonProps) {
  return (
    <div className="relative group inline-flex items-center">
      {children}
      {/* Tooltip */}
      <span
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                   px-2 py-1 text-xs rounded-md bg-black text-white opacity-0 
                   group-hover:opacity-100 transition-opacity pointer-events-none 
                   whitespace-nowrap z-50"
      >
        {title}
      </span>
    </div>
  );
}
