import axios from 'axios'

const API_BASE = process.env.NEXT_API_BASE || 'http://localhost:4000'

export const api = axios.create({
  baseURL: API_BASE,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})