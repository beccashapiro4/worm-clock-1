import { useState } from 'react'
import './App.css'
import './WormSegment.tsx'
import Worm from './WormSegment.tsx'

/*
TO-DO:
- fix worm alignment (maybe done?)
- make clock's position "relative" to size & center of greater webpage
- add cute little "squiggles" which appear & disappear
- add some sorta "foggy overlay" through which the squiggles are swimming
*/

function App() {
  let t = setTimeout(updatetime, 100);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  const center = { x: vw / 2, y: vh / 2 };
  const wormLength = 60;

  const sRadius = 200;
  const [sIndex, setSIndex] = useState(0);

  const mRadius = 250;
  const [mIndex, setMIndex] = useState(0);

  const hRadius = 300;
  const [hIndex, setHIndex] = useState(0);

  const [wiggleConstant, setWiggleConstant] = useState(0);

  function updatetime() {
    const newDate = new Date();
    const h = newDate.getHours() % 12
    const m = newDate.getMinutes()
    const s = newDate.getSeconds()
    const ms = newDate.getMilliseconds()
    setHours(h + m / 60);
    setMinutes(m + s / 60);
    setSeconds(s + ms / 1000);
    setWiggleConstant((wiggleConstant + 1) % 40);

    setSIndex(seconds / 60);
    setMIndex(minutes / 60);
    setHIndex(hours / 12);
  }

  function makeWorm(index, radius) {
    return <Worm
      index={index}
      center={center}
      radius={radius}
      wiggleConstant={wiggleConstant}
      length={wormLength}
    />
  }

  return (
    <>
      <div>
        <div className='centered-content'>
          <div className='background-circle'>
            <div className='center'></div>
          </div>
        </div>
        {makeWorm(sIndex, sRadius)}
        {makeWorm(mIndex, mRadius)}
        {makeWorm(hIndex, hRadius)}
      </div>
    </>
  )
}

export default App
