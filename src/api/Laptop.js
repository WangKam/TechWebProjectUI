import apiService from "../page/utils/request.service"

export const getListLaptopApi = async (page) => {
  return await apiService()({
    url: '/laptop',
    method: "get",
    params: {
      page,
      perPage: 5,
    }
  }).then((res) => res.data)
}

export const createLaptopApi = async (data) => {
  const res = await apiService()({
    url: '/laptop',
    method: "post",
    data
  })
  return res
}

export const deleteLaptopApi = async (name) => {
  const res = await apiService()({
    url: `/laptop/${name}`,
    method: "delete",
  })
  return res
}

export const updateLaptopApi = async (name, data) => {
  const res = await apiService()({
    url: `/laptop/${name}`,
    method: "put",
    data
  })
  return res
}