
export default function Dashboard(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <a href="/speaking" className="p-5 bg-white rounded shadow">Start Speaking Test</a>
        <a href="/writing" className="p-5 bg-white rounded shadow">Practice Writing</a>
        <a href="/rewriter" className="p-5 bg-white rounded shadow">Use Rewriter</a>
      </div>
      <div className="p-5 bg-white rounded shadow">
        <div className="font-semibold mb-2">Recent Reports</div>
        <div className="text-sm text-gray-600">(Connect to /reports)</div>
      </div>
    </div>
  )
}
