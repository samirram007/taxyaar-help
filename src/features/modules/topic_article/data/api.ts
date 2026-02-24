import { getData, postData, putData } from "@/utils/dataClient"


const API_PATH = "/help_center/topic_articles"
export async function fetchTopicArticleService() {
    return await getData(API_PATH)
}
export async function fetchTopicArticleByIdService(id: number) {
    return await getData(`${API_PATH}/${id}`)
}
export async function fetchTopicArticleBySlugService(slug: string) {
    return await getData(`${API_PATH}/${slug}/slug`)
}

export async function storeTopicArticleService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateTopicArticleService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}