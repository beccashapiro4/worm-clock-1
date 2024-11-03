import { useState } from 'react'
import './App.css'
import './WormSegment.tsx'
import Worm from './WormSegment.tsx'

function App() {
  let t = setTimeout(updatetime, 100);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const center = { x: 400, y: 400 };

  const sRadius = 200;
  const [sIndex, setSIndex] = useState(0);

  const mRadius = 250;
  const [mIndex, setMIndex] = useState(0);

  const hRadius = 300;
  const [hIndex, setHIndex] = useState(0);

  function updatetime() {
    const newDate = new Date();
    const h = newDate.getHours() % 12
    const m = newDate.getMinutes()
    const s = newDate.getSeconds()
    const ms = newDate.getMilliseconds()
    setHours(h + m / 60);
    setMinutes(m + s / 60);
    setSeconds(s + ms / 1000);

    setSIndex(seconds / 60);
    setMIndex(minutes / 60);
    setHIndex(hours / 60);
  }

  function testUpdatetime() {
    const newDate = new Date();
    const h = newDate.getHours() % 12
    const m = newDate.getMinutes()
    const s = newDate.getSeconds()
    const ms = newDate.getMilliseconds()
    setHours(h + m / 60);
    setMinutes(m + s / 60);
    setSeconds(s + ms / 1000);
    setSIndex(0);
    setMIndex(0);
  }

  return (
    <>
      <div>
        <Worm index={sIndex} center={center} radius={sRadius} />
        <Worm index={mIndex} center={center} radius={mRadius} />
        <Worm index={hIndex} center={center} radius={hRadius} />
        <div className='center' style={{ left: center.x, top: center.y }}></div>
      </div>
    </>
  )
}

export default App
