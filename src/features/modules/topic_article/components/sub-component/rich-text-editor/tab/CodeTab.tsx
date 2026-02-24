import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import parse from 'html-react-parser';
import parserHtml from "prettier/parser-html";
import prettier from "prettier/standalone";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";
import { useCallback, useState } from "react";
import Editor from "react-simple-code-editor";
import { useCodeContext } from "../contexts/CodeContext";

function CodeTab() {
  const { htmlCode, setHtmlCode } = useCodeContext() || {};
  const [isFormatting, setIsFormatting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [parsedHtml, setParsedHtml] = useState<React.ReactNode>(null);

  // Memoize the format handler
  const handleFormat = useCallback(async () => {
    // Check for valid input and context
    if (!htmlCode) {
      setError('No HTML code to format.');
      return;
    }

    // Check if parserHtml is loaded
    let htmlParser = parserHtml;
    if (!htmlParser) {
      setError('HTML parser plugin is not available. Attempting to load dynamically...');
      console.warn('Prettier parser-html plugin is undefined. Attempting dynamic import.');
      try {
        htmlParser = (await import('prettier/parser-html')).default || await import('prettier/parser-html');
      } catch (importErr) {
        console.error('Failed to dynamically load parser-html:', importErr);
        setError('Failed to load HTML parser plugin. Please check Prettier installation.');
        return;
      }
    }

    setIsFormatting(true);
    setError(null);

    try {
      const formatted = await prettier.format(htmlCode, {
        parser: 'html',
        plugins: [htmlParser],
        htmlWhitespaceSensitivity: 'ignore',
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
      });
      setHtmlCode(formatted);
      setParsedHtml(parse(formatted)); // Parse formatted HTML into React elements
    } catch (err) {
      console.error('Prettier format error:', err);
      setError('Failed to format HTML code. Please check the input or Prettier configuration.');
    } finally {
      setIsFormatting(false);
    }
  }, [htmlCode, setHtmlCode]);
  return (
    <div className="flex flex-col gap-2 h-full">
      <Button type="button" onClick={handleFormat} className="w-[200px] border px-3 py-1 rounded mb-2">
        Format HTML
      </Button>
      <Label htmlFor="code-editor" className="text-sm font-medium">
        HTML Code
      </Label>
      <div className="min-h-[400px] flex-1 font-mono text-sm rounded-lg border overflow-auto">

        <Editor
          value={htmlCode || ""}
          onValueChange={(code) => setHtmlCode(code)}
          highlight={(code) =>
            Prism.highlight(code, Prism.languages.html, "html")
          }
          padding={12}
          textareaId="code-editor"
          className="code-editor-body! outline-none  "
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
      </div>
    </div>
  );
}

export default CodeTab;
