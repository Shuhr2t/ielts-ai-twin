
import { useState } from 'react'
import { api } from '../lib/api'

export default function Register(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  async function submit(e:any){
    e.preventDefault()
    await api('/auth/register',{method:'POST', body: JSON.stringify({name,email,password})})
    location.href='/login'
  }
  return (
    <form onSubmit={submit} className="mx-auto max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold">Create account</h2>
      <input className="mt-4 w-full border p-2 rounded" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input className="mt-2 w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="mt-2 w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="mt-4 w-full bg-violet-600 text-white py-2 rounded">Register</button>
    </form>
  )
}
