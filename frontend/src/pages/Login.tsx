
import { useState } from 'react'
import { api } from '../lib/api'
import { setToken } from '../lib/auth'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  async function submit(e:any){
    e.preventDefault()
    const res = await api('/auth/login',{method:'POST', body: JSON.stringify({email,password})})
    setToken(res.access_token)
    location.href='/dashboard'
  }
  return (
    <form onSubmit={submit} className="mx-auto max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold">Login</h2>
      <input className="mt-4 w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="mt-2 w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="mt-4 w-full bg-violet-600 text-white py-2 rounded">Login</button>
    </form>
  )
}
