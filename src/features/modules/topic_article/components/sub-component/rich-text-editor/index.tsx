


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { TopicArticleForm } from "../../../data/schema";
import { CodeContextProvider, useCodeContext } from "./contexts/CodeContext";
import CodeTab from "./tab/CodeTab";
import EditorTab from "./tab/EditorTab";
import PreviewTab from "./tab/PreviewTab";
interface Props {
    form: UseFormReturn<TopicArticleForm>;
}
const RichTextEditor = ({ form }: Props) => {



    return (
        <CodeContextProvider form={form}>
            <EditorContent form={form} />

        </CodeContextProvider>
    );
};

export default RichTextEditor;

const EditorContent = ({ form }: Props) => {
    const [activeTab, setActiveTab] = useState<"code" | "writer">("writer");
    const { htmlCode } = useCodeContext() || {};

    // const [htmlCode, setHtmlCode] = useState<string>("<h1>Hello World</h1>");
    useEffect(() => {
        // if (htmlCode != null && htmlCode !== form.getValues("content")) {
        form.setValue("content", htmlCode);
        // }
    }, [htmlCode]);
    return (
        <div className="min-h-[300px] bg-gray-50 dark:bg-gray-900">
            <div className="!min-h-[inherit] grid grid-rows-1 grid-cols-1   gap-6">
                <Card className="shadow-lg rounded-2xl">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-semibold">Content</CardTitle>
                        <div className="flex items-center gap-3">
                            <ToggleGroup
                                type="single"
                                value={activeTab}
                                onValueChange={(val) =>
                                    val && setActiveTab(val as "code" | "writer")
                                }
                                className="space-x-2"
                            >
                                <ToggleGroupItem value="code" aria-label="Code Tab">
                                    Code
                                </ToggleGroupItem>
                                <ToggleGroupItem value="writer" aria-label="Writer Tab">
                                    Design
                                </ToggleGroupItem>
                            </ToggleGroup>
                            {/* <Button onClick={handleSave} variant="default">
                                Save
                            </Button> */}
                        </div>
                    </CardHeader>
                    <CardContent className="!min-h-[inherit] px-0">
                        {activeTab === "code" && <CodeTab />}
                        {activeTab === "writer" && <EditorTab />}
                    </CardContent>
                </Card>
                <Card className="hidden shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">Preview</CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <PreviewTab />
                    </CardContent>
                </Card>
            </div>
        </div>)
}
