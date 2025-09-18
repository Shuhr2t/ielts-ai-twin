
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import SpeakingLibrary from './pages/SpeakingLibrary'
import SpeakingPart1 from './pages/SpeakingPart1'
import SpeakingPart2 from './pages/SpeakingPart2'
import SpeakingPart3 from './pages/SpeakingPart3'
import WritingLibrary from './pages/WritingLibrary'
import WritingTask from './pages/WritingTask'
import Rewriter from './pages/Rewriter'
import ReportsList from './pages/ReportsList'
import ReportDetail from './pages/ReportDetail'
import Pricing from './pages/Pricing'
import Support from './pages/Support'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

function Shell({children}:{children:React.ReactNode}){
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-6xl flex gap-6 py-6">
        <SideBar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Shell><Dashboard/></Shell>} />
      <Route path="/speaking" element={<Shell><SpeakingLibrary/></Shell>} />
      <Route path="/speaking/part1" element={<Shell><SpeakingPart1/></Shell>} />
      <Route path="/speaking/part2" element={<Shell><SpeakingPart2/></Shell>} />
      <Route path="/speaking/part3" element={<Shell><SpeakingPart3/></Shell>} />
      <Route path="/writing" element={<Shell><WritingLibrary/></Shell>} />
      <Route path="/writing/task/:subtype/:title" element={<Shell><WritingTask/></Shell>} />
      <Route path="/rewriter" element={<Shell><Rewriter/></Shell>} />
      <Route path="/reports" element={<Shell><ReportsList/></Shell>} />
      <Route path="/reports/:id" element={<Shell><ReportDetail/></Shell>} />
      <Route path="/pricing" element={<Shell><Pricing/></Shell>} />
      <Route path="/support" element={<Shell><Support/></Shell>} />
      <Route path="/settings" element={<Shell><Settings/></Shell>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
