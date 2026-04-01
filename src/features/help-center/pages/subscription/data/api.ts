import { getData, postData, putData } from "@/utils/dataClient"


const API_PATH = "/topic_subscriptions"
export async function fetchTopicSubscriptionService() {
    return await getData(API_PATH)
}
export async function fetchTopicSubscriptionByIdService(id: number) {
    return await getData(`${API_PATH}/${id}`)
}

export async function storeTopicSubscriptionService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateTopicSubscriptionService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}