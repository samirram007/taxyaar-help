import type { TopicArticleForm } from "@/features/modules/topic_article/data/schema";
import { createContext, useContext, useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";

// 🧩 Define the type first
type CodeContextType = {
  htmlCode: string;
  setHtmlCode: (code: string) => void;
};

// 🎯 Create context with proper default value
const CodeContext = createContext<CodeContextType | undefined>(undefined);

interface CodeContextProviderProps {
  children: React.ReactNode;
  form: UseFormReturn<TopicArticleForm>;
}
export const CodeContextProvider = ({ children, form }: CodeContextProviderProps) => {
  const initialValue = form.getValues("content") || "<h1>Hello World</h1>";
  const [htmlCode, setHtmlCode] = useState<string>(initialValue);
  // Keep context and form synced
  useEffect(() => {
    const subscription = form.watch((values) => {
      if (values.content !== htmlCode) {
        setHtmlCode(values.content || "");
      }
    });
    return () => subscription.unsubscribe();
  }, [form, htmlCode]);
  return (
    <CodeContext.Provider value={{ htmlCode, setHtmlCode }}>
      {children}
    </CodeContext.Provider>
  );
};

// 🪄 Custom hook to access context safely
export const useCodeContext = (): CodeContextType => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error("useCodeContext must be used within a CodeContextProvider");
  }
  return context;
};
