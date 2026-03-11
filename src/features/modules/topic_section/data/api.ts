import { getData, postData, putData } from "@/utils/dataClient"


const API_PATH = "/help_center_topic_sections"
export async function fetchTopicSectionService() {
    return await getData(API_PATH)
}
export async function fetchTopicSectionByIdService(id: number) {
    return await getData(`${API_PATH}/${id}`)
}
export async function fetchTopicSectionBySlugService(slug: string) {
    return await getData(`${API_PATH}/${slug}/slug`)
}

export async function storeTopicSectionService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateTopicSectionService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}