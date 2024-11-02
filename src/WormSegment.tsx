import { useState } from 'react'
import wormHead from './assets/Worm_Head.png'
import './App.css'
import './Worm.css'

function WormSegment({ position }) {

    const wormStyle = {
        left: position.x,
        top: position.y,
    };

    return (
        <div className='Segment' style={wormStyle}> </div>
    )
}

export default WormSegment