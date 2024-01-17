import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonStructure"


//add videos
export const addVedioApi = async(bodyData)=>{
    return await commonApi("POST",`${BASE_URL}/videos`,bodyData)
}

//get all added videos
export const getVediosApi = async()=>{
    return await commonApi("GET",`${BASE_URL}/videos`,{})
}

//delete a video
export const delVedioApi = async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/videos/${id}`)
}

//add categories
export const addCategoryApi = async(bdata)=>{
    return await commonApi("POST",`${BASE_URL}/categories`,bdata)
}

//get all categories
export const getCategoryApi = async()=>{
    return await commonApi("GET",`${BASE_URL}/categories`,{})
}

//delete a category
export const delCategoryApi = async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/categories/${id}`)
}

//get a single video to drag and drop
export const getSingleVideoApi = async(id)=>{
    return await commonApi("GET",`${BASE_URL}/videos/${id}`,{})
}

//update category data while drag and dropping
export const updateCategoryApi = async(id,bodyData)=>{
    return await commonApi("PUT",`${BASE_URL}/categories/${id}`,bodyData)
}

//add history data
export const addHistoryApi = async(bdata)=>{
    return await commonApi("POST",`${BASE_URL}/histories`,bdata)
}

//get history data
export const getHistoryApi = async()=>{
    return await commonApi("GET",`${BASE_URL}/histories`,{})
}

//delete a history
export const delHistoryApi = async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/histories/${id}`)
}
