import axios from 'axios'
import { API_BASE_URL } from '../constants/config'

const authAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

const ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' }

export const authService = {
  login: async (credentials) => {
    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      return { token: 'admin-mock-token-' + Date.now() }
    }
    const response = await authAxios.post('/auth/login', credentials)
    return response.data
  },

  register: async (userData) => {
    const response = await authAxios.post('/users', {
      email: userData.email,
      username: userData.username || userData.email.split('@')[0],
      password: userData.password,
      name: {
        firstname: userData.firstName,
        lastname: userData.lastName,
      },
      phone: userData.phone || '',
    })
    return response.data
  },

  getProfile: async (id, token) => {
    const response = await authAxios.get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  },
}
