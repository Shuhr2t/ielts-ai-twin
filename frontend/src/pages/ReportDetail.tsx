
import ScoreBars from '../components/ScoreBars'
export default function ReportDetail(){
  const scores = { overall: 6.5, fluency: 7, vocab: 6.5, grammar: 6, pronunciation: 6.5 }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Speaking Part 1 — Sample Report</h1>
      <ScoreBars scores={scores} />
      <div className="bg-white p-3 rounded border">
        <div className="font-semibold">Transcript</div>
        <p className="text-sm text-gray-700 mt-2">[Sample transcript]</p>
      </div>
    </div>
  )
}
