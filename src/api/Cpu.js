import apiService from "../utilities/request.service"

export const getListCpuApi = async (page) => {
  return await apiService()({
    url: 'cpu',
    method: "get",
    params: {
      page,
      perPage: 5,
    }
  }).then((res) => res.data)
}

export const createCpuApi = async (data) => {
  const res = await apiService()({
    url: '/cpu',
    method: "post",
    data
  })
  return res
}

export const deleteCpuApi = async (name) => {
  const res = await apiService()({
    url: `/cpu/${name}`,
    method: "delete",
  })
  return res
}

export const updateCpuApi = async (name, data) => {
  const res = await apiService()({
    url: `/cpu/${name}`,
    method: "put",
    data
  })
  return res
}