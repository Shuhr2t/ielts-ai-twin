
import { Link } from 'react-router-dom'
const cards = [
  {title:'Milk Consumption', type:'Pie Chart'},
  {title:'Physical Activity', type:'Bar Chart'},
  {title:'Public School Budget', type:'Pie Chart', rec:true},
  {title:'Age Distribution', type:'Pie Chart'},
  {title:'Airport Redevelopment', type:'Maps'},
]
export default function WritingLibrary(){
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-violet-600 text-white">Academic Task 1</button>
          <button className="px-3 py-1 rounded border">General Task 1</button>
          <button className="px-3 py-1 rounded border">Task 2</button>
          <button className="px-3 py-1 rounded border">Custom Question</button>
        </div>
        <select className="border rounded px-2 py-1"><option>All types</option></select>
      </div>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded border p-3 text-center">
          <div className="font-semibold">Add Custom Task</div>
          <div className="text-xs text-gray-500">Paste a question/visual</div>
        </div>
        {cards.map(c=> (
          <div key={c.title} className="bg-white rounded border p-3">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{c.title}</div>
              {c.rec && <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded">Recommended</span>}
            </div>
            <div className="text-xs text-gray-500">{c.type}</div>
            <div className="text-xs text-gray-500 mt-1">No attempts yet</div>
            <Link to={`/writing/task/task1/${encodeURIComponent(c.title)}`} className="mt-3 inline-block px-3 py-1 border rounded">Start</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
