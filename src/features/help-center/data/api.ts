import { getData, postData, putData } from "@/utils/dataClient"


const API_PATH = "/help_centers"
export async function fetchHelpCenterService() {
    return await getData(API_PATH)
}
export async function fetchHelpCenterByIdService(id: number) {
    return await getData(`${API_PATH}/${id}`)
}

export async function storeHelpCenterService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateHelpCenterService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}