import { useState } from 'react'
import wormHead from './assets/Worm_Head.png'
import './App.css'
import './Worm.css'

function angleGivenIndex(i = 0) {
    return i * Math.PI * 2;
};

function positionAroundCircle(center, radius, i) {
    const angle = angleGivenIndex(i);
    const x: number = center.x + radius * Math.cos(angle);
    const y: number = center.y + radius * Math.sin(angle);
    return ({ x, y });
};

function WormSegment({ position, angle = 0, id = 'body' }) {

    const wormStyle = {
        left: position.x,
        top: position.y,
        rotate: angle.toString() + 'rad'
    };

    return (
        <div className='Segment' id={id} style={wormStyle}> </div>
    )
}

/* 
index is a number from 0-1 that maps to an angle around the circle
*/
function Worm({ index = 0, center = { x: 200, y: 200 }, radius = 100 }) {
    const headPosition = positionAroundCircle(center, radius, index);
    const headAngle = angleGivenIndex(index);

    const length = 20;

    function getSegments() {
        var i = 1;
        var segments = [];
        var segmentIndex = index
        segments.push(<WormSegment position={headPosition} angle={headAngle} id='head' />)
        while (i < length) {
            segmentIndex = (segmentIndex - 0.01) % 1;
            let pos = positionAroundCircle(center, radius, segmentIndex);
            let a = (angleGivenIndex(segmentIndex) - Math.PI / 2) % (Math.PI * 2);
            segments.push(<WormSegment position={pos} angle={a} id='body' />);
            i++
        };
        return segments
    };

    return (
        <div>
            {getSegments()}
        </div>
    )

};

export default Worm;