
export default function Rewriter(){
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Rewriter</h1>
      <textarea className="w-full h-48 border rounded p-3" placeholder="Paste text to rewrite..."/>
      <div className="flex gap-2">
        <select className="border px-2 py-1 rounded"><option>Neutral</option><option>Formal</option><option>Simpler</option></select>
        <select className="border px-2 py-1 rounded"><option>Same length</option><option>Shorter</option><option>Longer</option></select>
      </div>
      <button className="px-4 py-2 rounded bg-violet-600 text-white">Rewrite</button>
    </div>
  )
}
