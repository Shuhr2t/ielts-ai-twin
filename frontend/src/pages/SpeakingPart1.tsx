
import { useState } from 'react'
import AudioRecorder from '../components/AudioRecorder'

export default function SpeakingPart1(){
  const [blob,setBlob]=useState<Blob|null>(null)
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Speaking Part 1</h1>
      <p className="text-gray-600">Answer short questions. Aim for 20–30s.</p>
      <AudioRecorder onStop={setBlob} />
      {blob && <audio controls src={URL.createObjectURL(blob)} className="mt-3"/>}
    </div>
  )
}
