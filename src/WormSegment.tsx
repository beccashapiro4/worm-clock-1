import { useState } from 'react'
import wormHead from './assets/Worm_Head.png'
import './App.css'
import './Worm.css'

function WormSegment() {
    const [segmentCount, setSegmentCount] = useState(209)
    return (
        <div className='Segment'> </div>
    )
}

export default WormSegment