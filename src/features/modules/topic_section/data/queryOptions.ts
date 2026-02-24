import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchTopicSectionBySlugService, fetchTopicSectionService, storeTopicSectionService, updateTopicSectionService } from "./api"
import type { TopicSectionForm } from "./schema"

const BASE_KEY = "topicSection"

export const TopicSectionQueryOptions = (slug?: string) => {

    return queryOptions({
        queryKey: slug ? [BASE_KEY, slug] : [BASE_KEY],
        queryFn: () =>
            slug ? fetchTopicSectionBySlugService(slug) : fetchTopicSectionService(),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    })
}

export function useTopicSectionMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: TopicSectionForm & { id?: number }) => {
            if (data.id) {
                // Update if id exists
                return await updateTopicSectionService(data)
            }
            // Otherwise create
            return await storeTopicSectionService(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [BASE_KEY] })
        },
        onError: (error) => {
            console.error("TopicSection mutation failed:", error)
        },
    })
}