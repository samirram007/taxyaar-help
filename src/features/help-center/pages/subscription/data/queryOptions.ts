import { queryOptions } from "@tanstack/react-query"
import { fetchTopicSubscriptionByIdService, fetchTopicSubscriptionService } from "./api";

const BASE_KEY = "topicSubscription";

export const topicCommentQueryOptions = (id?: number) => {

    return queryOptions({
        queryKey: id ? [BASE_KEY, id] : [BASE_KEY],
        queryFn: () =>
            id ? fetchTopicSubscriptionByIdService(id) : fetchTopicSubscriptionService(),
        staleTime: 1000 * 60 * 5,
        retry: 1,
    })
}

// export function useCompanyMutation() {
//     const queryClient = useQueryClient()
//     return useMutation({
//         mutationFn: async (data: CompanyForm & { id?: number }) => {
//             if (data.id) {
//                 // Update if id exists
//                 return await updateTopicCommentService(data)
//             }
//             // Otherwise create
//             return await storeTopicCommentService(data)
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: [BASE_KEY] })
//         },
//         onError: (error) => {
//             console.error("Company mutation failed:", error)
//         },
//     })
// }