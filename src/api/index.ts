import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Permissions-Policy": "interest-cohort=()",
  },
})

export const userAPI = {
  getUser(name: string) {
    return instance.get(`/users/${name}`)
  },
}
