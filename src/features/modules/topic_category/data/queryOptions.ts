import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchTopicCategoryBySlugService, fetchTopicCategoryService, storeTopicCategoryService, updateTopicCategoryService } from "./api"
import type { TopicCategoryForm } from "./schema"

const BASE_KEY = "topicCategory"

export const TopicCategoryQueryOptions = (slug?: string) => {

    return queryOptions({
        queryKey: slug ? [BASE_KEY, slug] : [BASE_KEY],
        queryFn: () =>
            slug ? fetchTopicCategoryBySlugService(slug) : fetchTopicCategoryService(),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    })
}

export function useTopicCategoryMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: TopicCategoryForm & { id?: number }) => {
            if (data.id) {
                // Update if id exists
                return await updateTopicCategoryService(data)
            }
            // Otherwise create
            return await storeTopicCategoryService(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [BASE_KEY] })
        },
        onError: (error) => {
            console.error("TopicCategory mutation failed:", error)
        },
    })
}