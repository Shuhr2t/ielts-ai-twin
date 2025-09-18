
import { NavLink } from 'react-router-dom'
export default function SideBar(){
  const link = ({isActive}:{isActive:boolean}) => `block px-3 py-2 rounded ${isActive? 'bg-violet-600 text-white':'hover:bg-gray-100'}`
  return (
    <aside className="w-56 p-3 border-r bg-white">
      <nav className="space-y-1 text-sm">
        <NavLink to="/dashboard" className={link}>Dashboard</NavLink>
        <NavLink to="/reports" className={link}>My Reports</NavLink>
        <NavLink to="/writing" className={link}>Writing</NavLink>
        <NavLink to="/speaking" className={link}>Speaking</NavLink>
        <NavLink to="/rewriter" className={link}>Rewriter</NavLink>
        <NavLink to="/sample-reports" className={link}>Sample Reports</NavLink>
        <NavLink to="/pricing" className={link}>Pricing</NavLink>
        <NavLink to="/support" className={link}>Support</NavLink>
      </nav>
    </aside>
  )
}
