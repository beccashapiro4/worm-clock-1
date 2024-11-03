import { useState } from 'react'
import './App.css'
import './WormSegment'
import WormSegment from './WormSegment.tsx'
import Worm from './WormSegment.tsx'

function CircularMotion(center, radius, i) {
  const angle = i * Math.PI * 2;
  const x: number = center.x + radius * Math.cos(angle);
  const y: number = center.y + radius * Math.sin(angle);
  return ({ x, y });
}

function App() {
  let t = setTimeout(updatetime, 100);
  const [wormPosition, setWormPosition] = useState({ x: 200, y: 200 });
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const minutesInADay = 12 * 60;
  const secondsInAnHour = 60 * 60;

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
    moveWormInACircle();
  }

  function moveWormInACircle() {
    const newPosition = CircularMotion(center, radius, seconds / 60);
    setWormPosition(newPosition);
  }

  function wormAngle() {
    const angle = (seconds / 60) * Math.PI * 2;
    return angle;
  }

  return (
    <>
      <div>
        <Worm headPosition={wormPosition} angle={wormAngle()} />
        <div className='center' style={{ left: center.x, right: center.y }}></div>
        <h1>hours: {hours}</h1>
        <h1>minutes: {minutes}</h1>
        <h1>seconds: {seconds}</h1>
      </div>
    </>
  )
}

export default App
