import { queryOptions, useMutation } from "@tanstack/react-query"
import { fetchTicketTypeService, storeTicketMasterService } from "./api"
import type { TicketForm } from "./schema"
import { toast } from "sonner"

const Key = "ticketTypes"
export const ticketTypeQueryOptions = (key: string = Key) => {
    return queryOptions({
        queryKey: [key],
        queryFn: fetchTicketTypeService,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    })
}


export function useTicketMasterMutation() {
    // const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: TicketForm & { id?: number }) => {
            // console.log("mutation Data", data)
            if (data.id) {
                // Update if id exists
                // return await updateDayBookService(data)
            }
            // Otherwise create
            return await storeTicketMasterService(data)
        },
        onSuccess: () => {
            toast.success("Your request has been submitted")
            // queryClient.invalidateQueries({ queryKey: [Key] })
        },
        onError: (error) => {
            console.error("Your request failed:", error)
        },
    });

}