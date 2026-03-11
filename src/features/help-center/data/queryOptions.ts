import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchHelpCenterByIdService, fetchHelpCenterService, searchArticleService, storeHelpCenterService, updateHelpCenterService } from "./api"
import type { HelpCenterForm } from "./schema"

const BASE_KEY = "help-centers"

export const HelpCenterQueryOptions = (id?: number) => {

    return queryOptions({
        queryKey: id ? [BASE_KEY, id] : [BASE_KEY],
        queryFn: () =>
            id ? fetchHelpCenterByIdService(id) : fetchHelpCenterService(),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    })
}
export const SearchArticleQueryOptions = (searchString: string) => {

    return queryOptions({
        queryKey: [BASE_KEY, "search", searchString],
        queryFn: () => searchArticleService(searchString),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
        enabled: searchString.trim().length >= 2
    })
}

export function useHelpCenterMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: HelpCenterForm & { id?: number }) => {
            if (data.id) {
                // Update if id exists
                return await updateHelpCenterService(data)
            }
            // Otherwise create
            return await storeHelpCenterService(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [BASE_KEY] })
        },
        onError: (error) => {
            console.error("HelpCenter mutation failed:", error)
        },
    })
}