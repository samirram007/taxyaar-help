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

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { capitalizeAllWords } from "@/utils/removeEmptyStrings";
import { useQuery } from "@tanstack/react-query";
import { InfoIcon } from "lucide-react";
import { useMemo } from "react";
import type { UseFormReturn } from "react-hook-form";

import { fetchTicketTypeService } from "../data/api";
import type { TicketForm, TicketType } from "../data/schema";

type Props = {
  form: UseFormReturn<TicketForm>;
};

const TicketTypeDropdown = ({ form }: Props) => {
  const { data: ticketTypeList, isLoading } = useQuery({
    queryKey: ["ticketTypes"],
    queryFn: fetchTicketTypeService,
  });

  const ticketTypeId = form.watch("ticketTypeId");

  const selectedTicketType: (TicketType & { description?: string }) | null =
    useMemo(() => {
      if (!ticketTypeList?.data || !ticketTypeId) return null;

      return (
        ticketTypeList.data.find(
          (type: TicketType) => type.id === Number(ticketTypeId)
        ) || null
      );
    }, [ticketTypeId, ticketTypeList?.data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <FormField
      control={form.control}
      name="ticketTypeId"
      render={({ field }) => (
        <FormItem className="grid grid-rows-2 items-start gap-x-1 gap-y-1">
          <FormLabel className="col-span-2 text-right mt-3">
            Ticket Type
          </FormLabel>

          <div className="w-full flex gap-2 items-center col-span-4">
            <Select
              value={field.value ? String(field.value) : undefined} // ⚠️ important
              onValueChange={(val) => field.onChange(Number(val))} // convert to number
            >
              <SelectTrigger className="w-11/12">
                <SelectValue placeholder="Select a ticket type" />
              </SelectTrigger>

              <SelectContent>
                {ticketTypeList?.data?.map((type: TicketType) => (
                  <SelectItem key={type.id} value={String(type.id)}>
                    {capitalizeAllWords(type.name)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedTicketType && (
              <HoverCard>
                <HoverCardTrigger>
                  <div className="text-muted-foreground">
                    <InfoIcon className="cursor-pointer" size={20} />
                  </div>
                </HoverCardTrigger>

                <HoverCardContent>
                  <div className="font-semibold border-b mb-1">
                    {selectedTicketType.name}
                  </div>

                  {"description" in selectedTicketType &&
                    selectedTicketType.description && (
                      <div className="text-sm">
                        {selectedTicketType.description}
                      </div>
                    )}
                </HoverCardContent>
              </HoverCard>
            )}
          </div>

          <FormMessage className="col-span-4 col-start-3" />
        </FormItem>
      )}
    />
  );
};

export default TicketTypeDropdown;