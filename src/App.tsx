import { useState } from 'react'
import './App.css'
import './WormSegment'
import WormSegment from './WormSegment'

function App() {
  setInterval(updatetime, 1000);
  const [wormPosition, setWormPosition] = useState({ x: 200, y: 200 });
  const now = new Date().getHours(); // sets initial state
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const [hours, setHours] = useState(now);
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);

  function updatetime() {
    const newDate = new Date();
    setHours(newDate.getHours());
    setMinutes(newDate.getMinutes());
    setSeconds(newDate.getSeconds());
  }

  const shiftWorm = (newPosition) => {
    setWormPosition(newPosition);
  }

  return (
    <>
      <div>
        <WormSegment position={wormPosition} />
        <button onClick={() => shiftWorm({ x: 500, y: 500 })}>
          Move Child
        </button>
        <h1>hours: {hours}</h1>
        <h1>minutes: {minutes}</h1>
        <h1>seconds: {seconds}</h1>
      </div>
    </>
  )
}

export default App
