import { useState } from 'react'
import './App.css'
import './WormSegment.tsx'
import Worm from './WormSegment.tsx'
import './Lightbulb.css'

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

  function updatetime() {
    const newDate = new Date();
    var h = newDate.getHours() % 12
    var m = newDate.getMinutes()
    var s = newDate.getSeconds()
    var ms = newDate.getMilliseconds()

    setHours(h + m / 60);
    setMinutes(m + s / 60);
    setSeconds(s + ms / 1000);

    setSIndex(seconds / 60);
    setMIndex(minutes / 60);
    setHIndex(hours / 12);

    if (m == 0 && s == 0) {
      /* trigger animation on the hour */
      lightUp();
    };
  };

  function makeWorm(index, radius, hue) {
    return <Worm
      index={index}
      center={center}
      radius={radius}
      hue={hue}
      length={wormLength}
    />
  }

  /* LIGHTBUBL */

  function isEven(i: number) {
    return i % 2 == 0
  }

  /* unused for now, but likely a more elegant way to trigger animation */
  enum animationState {
    "flash-1" = 0,
    "flash-2" = 1
  }

  function animationName() {
    if (iterationState < 0) {
      return null /* prevents arbitrary animation on initial launch */
    } else {
      return isEven(iterationState) ? 'flash-1' : 'flash-2';
    };
  };

  function lightUp() {
    setIterationState((iterationState + 1) % 2)
  }

  const [iterationState, setIterationState] = useState(-1);

  const bulbStyle = {
    animationName: animationName(),
    animationIterationCount: Math.floor(hours) == 0 ? 12 : Math.floor(hours)
  };

  /* PLAY/PAUSE BUTTON (currently unused) */

  const [datePaused, setDatePaused] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);
  const [feauxTime, setFeauxTime] = useState(0);
  const BUTTON_IS_VISIBLE = false;

  function pauseDate(time: number) {
    if (!BUTTON_IS_VISIBLE) {
      return;
    };

    setFeauxTime(time);
    setDatePaused(new Date());
    setIsPaused(true)
  }

  function playDate() {
    setIsPaused(false)
  }

  /* this logic goes in the update function if we ever use pause/play */
  function updateIfPaused(newDate: Date, h: number, m: number, s: number, ms: number) {
    if (isPaused) {
      if ((newDate.getTime() / 1000) - (datePaused.getTime() / 1000) > (feauxTime * 4.5)) {
        playDate();
      } else {
        h = feauxTime;
        m -= datePaused.getMinutes();
        s -= datePaused.getSeconds();
        ms -= datePaused.getMilliseconds();
      }
    }
  }

  const buttonStyle = {
    opacity: BUTTON_IS_VISIBLE ? (!isPaused ? '100%' : '25%') : '0%'
  };

  return (
    <>
      <div>
        <div className='centered-content'>
          <div className='background-circle'></div>
        </div>
        <div className='Bulb' style={bulbStyle} onClick={lightUp} />
        <div className='press-play' style={buttonStyle} onClick={() => pauseDate(5)} />
        {makeWorm(sIndex, sRadius, sHue)}
        {makeWorm(mIndex, mRadius, mHue)}
        {makeWorm(hIndex, hRadius, hHue)}
      </div>
    </>
  )
}

export default App
