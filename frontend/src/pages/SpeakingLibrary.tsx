
import { Link } from 'react-router-dom'
const topics = [
  'Advertisement','Animals 2','Art','Bicycles','Books and reading','Boredom','Borrowing/lending','Cars','Childhood memory','Clothes 2','Coins','Collecting things','Colours','Computers','Crowded places','Daily routine','Doing sports','Dreams','Emails','Evening time','Fast food','Feeling bored','Films/Movies','Flowers and plants','Food and cooking','Friends'
]
export default function SpeakingLibrary(){
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-violet-600 text-white">Part 1</button>
          <button className="px-3 py-1 rounded border">Part 2</button>
          <button className="px-3 py-1 rounded border">Part 3</button>
          <button className="px-3 py-1 rounded border">Custom Question</button>
        </div>
        <select className="border rounded px-2 py-1"><option>Popular Topics</option></select>
      </div>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {topics.map(t=> (
          <div key={t} className="bg-white rounded border p-3">
            <div className="text-sm text-gray-500">Practice Topic</div>
            <div className="font-semibold">{t}</div>
            <div className="text-xs text-gray-500 mt-1">No attempts yet</div>
            <Link to="/speaking/part1" className="mt-3 inline-block px-3 py-1 border rounded">Start</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
