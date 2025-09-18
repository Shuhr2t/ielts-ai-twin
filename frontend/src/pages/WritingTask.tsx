
import { useParams } from 'react-router-dom'
export default function WritingTask(){
  const { subtype, title } = useParams()
  return (
    <div>
      <h1 className="text-xl font-semibold">{decodeURIComponent(title||'Task')}</h1>
      <textarea className="mt-3 w-full h-64 border rounded p-3" placeholder="Write your response here..."/>
      <div className="text-sm text-gray-500 mt-1">Word count shows here.</div>
      <button className="mt-3 px-4 py-2 rounded bg-violet-600 text-white">Submit for Evaluation</button>
    </div>
  )
}
