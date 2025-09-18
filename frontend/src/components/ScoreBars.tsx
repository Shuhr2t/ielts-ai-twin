
export default function ScoreBars({scores}:{scores:Record<string,number|string>}){
  const entries = Object.entries(scores)
  return (
    <div className="space-y-2">
      {entries.map(([k,v])=>{
        const n = typeof v==='number'? v : parseFloat(String(v))
        return (
          <div key={k}>
            <div className="flex justify-between text-sm"><span className="capitalize">{k.replace('_',' ')}</span><span>{n.toFixed(1)}</span></div>
            <div className="h-2 bg-gray-200 rounded"><div className="h-2 bg-violet-600 rounded" style={{width:`${(n/9)*100}%`}}/></div>
          </div>
        )
      })}
    </div>
  )
}
