
export default function Pricing(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded border">
        <h2 className="text-xl font-semibold">Free</h2>
        <ul className="mt-2 text-sm list-disc ml-6"><li>Basic evaluations</li><li>Limited reports</li></ul>
      </div>
      <div className="bg-white p-6 rounded border">
        <h2 className="text-xl font-semibold">Pro</h2>
        <ul className="mt-2 text-sm list-disc ml-6"><li>Full breakdown</li><li>History + export</li></ul>
      </div>
    </div>
  )
}
