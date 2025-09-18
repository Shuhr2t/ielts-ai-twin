
import { Link } from 'react-router-dom'
export default function NavBar(){
  return (
    <div className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between p-3">
        <Link to="/" className="font-bold">IELTS AI Twin</Link>
        <div className="flex gap-4 text-sm">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/reports">My Reports</Link>
          <Link to="/writing">Writing</Link>
          <Link to="/speaking">Speaking</Link>
          <Link to="/rewriter">Rewriter</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/support">Support</Link>
          <Link to="/login" className="px-3 py-1 rounded bg-blue-600 text-white">Login</Link>
        </div>
      </div>
    </div>
  )
}
