import apiService from "../page/utils/request.service"

export const loginApi = async ({username, password}) => {
  return await apiService()({
    url: '/accounts/login',
    method: "post",
    data: {
      login_name: username,
      password,
    }
  }).then((res) => res.data)
}