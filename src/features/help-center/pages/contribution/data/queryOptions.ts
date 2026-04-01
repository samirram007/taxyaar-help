import { queryOptions, useMutation, useQueryClient, } from "@tanstack/react-query"
import { fetchTopicCommentByIdService, fetchTopicCommentService, storeTopicCommentService } from "./api";
import type { TopicCommentForm } from "./schema";

const BASE_KEY = "topicComments";

export const topicCommentQueryOptions = (id?: number) => {

    return queryOptions({
        queryKey: id ? [BASE_KEY, id] : [BASE_KEY],
        queryFn: () =>
            id ? fetchTopicCommentByIdService(id) : fetchTopicCommentService(),
        staleTime: 1000 * 60 * 5,
        retry: 1,
    })
}

export function useTopicCommentMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: TopicCommentForm) => {
            // if (data.id) {
            //     // Update if id exists
            //     return await updateTopicCommentService(data)
            // }
            // Otherwise create
            return await storeTopicCommentService(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [BASE_KEY] })
        },
        onError: (error) => {
            console.error("Company mutation failed:", error)
        },
    })
}