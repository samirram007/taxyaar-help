import { getData, postMultiPartData } from "@/utils/dataClient"


const API_PATH = "/ticket_types"
export async function fetchTicketTypeService() {
    return await getData(API_PATH)
}
// export async function fetchTicketTypeByIdService(id: number) {
//     return await getData(`${API_PATH}/${id}`)
// }

// export async function storeTicketTypeService(payload: any) {
//     return await postData(API_PATH, payload)
// }
// export async function updateTicketTypeService(payload: any) {
//     return await putData(`${API_PATH}/${payload.id}`, payload)
// }


const TICKET_MASTER_PATH = "/ticket_master"
// export async function fetchTicketTypeService() {
//     return await getData(API_PATH)
// }
// export async function fetchTicketTypeByIdService(id: number) {
//     return await getData(`${API_PATH}/${id}`)
// }

export async function storeTicketMasterService(payload: any) {
    return await postMultiPartData(TICKET_MASTER_PATH, payload)
}
// export async function updateTicketTypeService(payload: any) {
//     return await putData(`${API_PATH}/${payload.id}`, payload)
// }