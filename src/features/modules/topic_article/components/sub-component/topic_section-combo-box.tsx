

import { CheckIcon, ChevronsUpDownIcon, Loader } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { fetchTopicSectionService } from "@/features/modules/topic_section/data/api"
import type { TopicSection } from "@/features/modules/topic_section/data/schema"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import type { UseFormReturn } from "react-hook-form"
import type { TopicArticleForm } from "../../data/schema"

// const frameworks = [
//     {
//         value: "next.js",
//         label: "Next.js",
//     },
//     {
//         value: "sveltekit",
//         label: "SvelteKit",
//     },
//     {
//         value: "nuxt.js",
//         label: "Nuxt.js",
//     },
//     {
//         value: "remix",
//         label: "Remix",
//     },
//     {
//         value: "astro",
//         label: "Astro",
//     },
// ]
interface Props {
    form: UseFormReturn<TopicArticleForm>;
}

interface GroupedSections {
    [categoryName: string]: TopicSection[];
}

export const TopicSectionCombobox = ({ form }: Props) => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(form.getValues('topicSectionId')?.toString())
    const { data: topicSectionList, isLoading } = useQuery({
        queryKey: ["topicSections"],
        queryFn: () => fetchTopicSectionService(),
    })

    const handleSelect = (value: string) => {
        form.setValue("topicSectionId", Number(value))
        setValue(value)
        setOpen(false)
    }
    const groupedSections: GroupedSections = topicSectionList?.data.reduce(
        (acc: GroupedSections, section: TopicSection) => {
            const categoryName = section.topicCategory?.name || "Uncategorized";
            if (!acc[categoryName]) acc[categoryName] = [];
            acc[categoryName].push(section);
            return acc;
        },
        {} // initial value
    );
    if (isLoading) return <Loader size={18} />


    return (
        <div className="relative grid grid-cols-[140px_1fr] pb-4">
            <Label>Category / Section</Label>


            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                    >
                        {value
                            ? (() => {
                                const selected = topicSectionList?.data.find(
                                    (topicSection: TopicSection) => topicSection.id === Number(value)
                                );
                                return selected
                                    ? `${selected.topicCategory?.name || "Uncategorized"} / ${selected.name}`
                                    : "Select party...";
                            })()
                            : "Select party..."}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="popover-content-width-same-as-trigger p-0">
                    <Command className="rounded-lg border shadow-md min-w-full">
                        <CommandInput placeholder="Search party..." />
                        <CommandList>
                            <CommandEmpty>No Section found.</CommandEmpty>

                            {Object.entries(groupedSections).map(([categoryName, sections]) => (
                                <CommandGroup key={categoryName} heading={categoryName}>
                                    {sections.map((topicSection) => (
                                        <CommandItem
                                            className="min-w-full"
                                            key={topicSection.id}
                                            value={topicSection.id!.toString()}
                                            onSelect={() => handleSelect(topicSection.id!.toString())}
                                        >
                                            <CheckIcon
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === topicSection.id!.toString() ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {topicSection.name}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
                {/* <PopoverContent className="popover-content-width-same-as-trigger p-0">
                    <Command className="rounded-lg border shadow-md min-w-full">
                        <CommandInput placeholder="Search party..." />
                        <CommandList>
                            <CommandEmpty>No Section found.</CommandEmpty>
                            <CommandGroup>
                                {topicSectionList?.data.map((topicSection: TopicSection) => (
                                    <CommandItem
                                        className="min-w-full"
                                        key={topicSection.id}
                                        value={topicSection.id!.toString()}
                                        onSelect={() => handleSelect(topicSection.id!.toString())}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === topicSection.id!.toString()
                                                    ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {topicSection.topicCategory?.name} - {topicSection.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent> */}
            </Popover>
        </div>
    )
}