import { getData, postData, putData } from "@/utils/dataClient"


const API_PATH = "/topic_comments"
export async function fetchTopicCommentService() {
    return await getData(API_PATH)
}
export async function fetchTopicCommentByIdService(id: number) {
    return await getData(`${API_PATH}/${id}`)
}

export async function storeTopicCommentService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateTopicCommentService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}