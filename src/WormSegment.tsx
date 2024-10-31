import { useState } from 'react'
import wormHead from './assets/Worm_Head.png'
import './App.css'
import './Worm.css'

function WormSegment() {
    const [position, setPosition] = useState({ x: 200, y: 500 })
    const wormStyle = {
        position: 'absolute',
        left: position.x,
        top: position.y,
    };
    return (
        <div className='Segment' style={wormStyle} onClick={() => setPosition({ x: 500, y: 200 })}> </div>
    )
}

export default WormSegment