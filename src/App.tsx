import { useState } from 'react'
import './App.css'
import './WormSegment.tsx'
import Worm from './WormSegment.tsx'

function App() {
  let t = setTimeout(updatetime, 100);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const center = { x: 700, y: 400 };
  const radius = 200;
  const [index, setIndex] = useState(0);

  function updatetime() {
    const newDate = new Date();
    const h = newDate.getHours() % 12
    const m = newDate.getMinutes()
    const s = newDate.getSeconds()
    const ms = newDate.getMilliseconds()
    setHours(h + m / 60);
    setMinutes(m + s / 60);
    setSeconds(s + ms / 1000);
    setIndex(seconds / 60);
  }

  return (
    <>
      <div>
        <Worm index={index} center={center} radius={radius} />
        <div className='center' style={{ left: center.x, top: center.y }}></div>
        <h1>seconds: {seconds.toPrecision(2)}</h1>
      </div>
    </>
  )
}

export default App
