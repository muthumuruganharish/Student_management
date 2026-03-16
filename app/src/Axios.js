import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:5000/api"
})



// interceptor
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")// we are using this because to store cache

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default instance