"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { UseFormReturn } from "react-hook-form";
import type { TicketForm } from "../data/schema";

type Props = {
  form: UseFormReturn<TicketForm>;
};

const PLATFORM_OPTIONS = [
  { label: "iOS", value: "ios" },
  { label: "Android", value: "android" },
  { label: "Web", value: "web" },
];

const PlatformDropdown = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name="platform"
      render={({ field }) => (
        <FormItem className="grid grid-rows-2 items-start gap-x-4 gap-y-1">
          <FormLabel className="col-span-2 text-right mt-3">
            Platform
          </FormLabel>

          <div className="col-span-4">
            <Select
              value={field.value || undefined} // ⚠️ important
              onValueChange={field.onChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>

              <SelectContent>
                {PLATFORM_OPTIONS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <FormMessage className="col-span-4 col-start-3" />
        </FormItem>
      )}
    />
  );
};

export default PlatformDropdown;