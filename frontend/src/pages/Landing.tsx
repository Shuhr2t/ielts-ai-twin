
import { Link } from 'react-router-dom'
export default function Landing(){
  return (
    <div>
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl py-16">
          <h1 className="text-4xl font-bold">IELTS AI Coach for Speaking & Writing</h1>
          <p className="mt-3 text-gray-600">Instant band scores & examiner‑style feedback.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/register" className="px-5 py-3 bg-violet-600 text-white rounded">Get Started</Link>
            <Link to="/speaking" className="px-5 py-3 border rounded">Try Speaking</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
