"use client"

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
import { fetchTopicCategoryService } from "@/features/modules/topic_category/data/api"
import type { TopicCategory } from "@/features/modules/topic_category/data/schema"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import type { UseFormReturn } from "react-hook-form"
import type { TopicSectionForm } from "../../data/schema"

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
    form: UseFormReturn<TopicSectionForm>;
}
export const TopicCategoryCombobox = ({ form }: Props) => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(form.getValues('topicCategoryId')?.toString())
    const { data: topicCategoryList, isLoading } = useQuery({
        queryKey: ["topicCategories"],
        queryFn: () => fetchTopicCategoryService(),
    })

    const handleSelect = (value: string) => {
        form.setValue("topicCategoryId", Number(value))
        setValue(value)
        setOpen(false)
    }

    if (isLoading) return <Loader size={18} />


    return (
        <div className="relative grid grid-cols-[140px_1fr] pb-4">
            <Label>Topic Category</Label>


            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                    >
                        {value
                            ? topicCategoryList?.data.find((topicCategoty: TopicCategory) => topicCategoty.id === Number(value))?.name
                            : "Select party..."}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="popover-content-width-same-as-trigger p-0">
                    <Command className="rounded-lg border shadow-md min-w-full">
                        <CommandInput placeholder="Search party..." />
                        <CommandList>
                            <CommandEmpty>No pary found.</CommandEmpty>
                            <CommandGroup>
                                {topicCategoryList?.data.map((topicCategoty: TopicCategory) => (
                                    <CommandItem
                                        className="min-w-full"
                                        key={topicCategoty.id}
                                        value={topicCategoty.id!.toString()}
                                        onSelect={() => handleSelect(topicCategoty.id!.toString())}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === topicCategoty.id!.toString()
                                                    ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {topicCategoty.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}