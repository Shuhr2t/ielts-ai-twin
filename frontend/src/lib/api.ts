
const API = (import.meta as any).env.VITE_API_URL || 'http://localhost:8000'

export async function api(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token')
  const headers: any = { ...(options.headers || {}) }
  const isForm = options.body instanceof FormData
  if (!isForm) headers['Content-Type'] = 'application/json'
  if (token) headers['Authorization'] = `Bearer ${token}`
  const res = await fetch(`${API}${path}`, { ...options, headers })
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}
