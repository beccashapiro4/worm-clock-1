import { useState } from 'react'
import './App.css'
import './WormSegment.tsx'
import Worm from './WormSegment.tsx'

/*
TO-DO:
- link to worm-clock on my website
- embellishments: 
- --> add cute little "squiggles" which appear & disappear
- --> add some sorta "foggy overlay" through which the squiggles are swimming
*/

function App() {
  let t = setTimeout(updatetime, 100);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  let vmin = Math.min(vw, vh);

  const center = { x: vw / 2, y: vh / 2 };
  const wormLength = 60;

  const sRadius = vmin * 0.4 * 0.484;
  const sHue = 120;
  const [sIndex, setSIndex] = useState(0);

  const mRadius = vmin * 0.4 * 0.64;
  const mHue = 240;
  const [mIndex, setMIndex] = useState(0);

  const hRadius = vmin * 0.4 * 0.8;
  const hHue = 0;
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

  function makeWorm(index, radius, hue) {
    return <Worm
      index={index}
      center={center}
      radius={radius}
      hue={hue}
      wiggleConstant={wiggleConstant}
      length={wormLength}
    />
  }

  return (
    <>
      <div>
        <div className='centered-content'>
          <div className='background-circle'></div>
        </div>
        {makeWorm(sIndex, sRadius, sHue)}
        {makeWorm(mIndex, mRadius, mHue)}
        {makeWorm(hIndex, hRadius, hHue)}
      </div>
    </>
  )
}

export default App
