import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
})

export const userAPI = {
  getUser(name: string) {
    return instance.get(`/users/${name}`)
  },
}
