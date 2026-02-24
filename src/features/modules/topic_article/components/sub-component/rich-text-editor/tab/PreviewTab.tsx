import { useCodeContext } from "../contexts/CodeContext";



function PreviewTab() {
  const { htmlCode } = useCodeContext() || {};

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlCode ?? "" }}
      className="w-full min-h-full border p-2 prose dark:prose-invert max-w-none shadow-lg rounded-sm"
      title="Preview"
    />
  );
}

export default PreviewTab;
