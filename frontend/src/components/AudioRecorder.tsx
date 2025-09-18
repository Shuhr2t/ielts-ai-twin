
import { useEffect, useRef, useState } from 'react'
export default function AudioRecorder({onStop}:{onStop:(blob:Blob)=>void}){
  const [rec,setRec]=useState<MediaRecorder|null>(null)
  const chunks = useRef<Blob[]>([])
  const [recording,setRecording]=useState(false)
  useEffect(()=>{return ()=>rec?.stop()},[rec])
  async function start(){
    const stream = await navigator.mediaDevices.getUserMedia({audio:true})
    const mr = new MediaRecorder(stream)
    mr.ondataavailable = e=>chunks.current.push(e.data)
    mr.onstop = ()=>{ onStop(new Blob(chunks.current,{type:'audio/webm'})); chunks.current=[] }
    mr.start(); setRec(mr); setRecording(true)
  }
  function stop(){ rec?.stop(); setRecording(false) }
  return (
    <div className="flex items-center gap-3">
      {!recording? <button onClick={start} className="px-4 py-2 rounded bg-violet-600 text-white">Start</button> : <button onClick={stop} className="px-4 py-2 rounded bg-rose-600 text-white">Stop</button>}
    </div>
  )
}
