import { useState } from 'react'
import wormHead from './assets/Worm_Head.png'
import './App.css'
import './Worm.css'

function WormSegment({ position }) {

    const wormStyle = {
        position: 'absolute',
        left: position.x,
        top: position.y,
    };

    const shimmy = {
        x: position.x + Math.sin(0.25) * 10,
        y: position.y + Math.cos(0.25) * 10
    }

    return (
        <div className='Segment' style={wormStyle}> </div>
    )
}

export default WormSegment