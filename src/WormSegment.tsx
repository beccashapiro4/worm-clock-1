import { useState } from 'react'
import wormHead from './assets/Worm_Head.png'
import './App.css'
import './Worm.css'

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

function Worm({ headPosition, angle = Math.PI * 0.7 }) {
    const length = 100;
    const [segmentPositions, setSegmentPositions] = useState([]);

    function readableSegmentPositions() {
        const Exes = segmentPositions.map((item) => {
            return item.x.toPrecision(3).toString() + ','
        });
        const Wise = segmentPositions.map((item) => {
            return item.y.toPrecision(3).toString() + ','
        })

        return (
            <div>
                <p> exes are: {Exes} </p>
                <p> wise are: {Wise} </p>
            </div>
        )
    }

    function initializeSegmentPositions() {
        while (segmentPositions.length < length) {
            segmentPositions.push({ x: 300, y: 300 })
        }
    }

    function moveSegments() {
        var parentPosition = headPosition;
        for (let i = 0; i < length; i++) {
            let nextParent = segmentPositions[i];
            segmentPositions[i] = parentPosition;
            parentPosition = nextParent;
        }
    };

    function getSegments() {
        var i = 1;
        var segments = [];
        segments.push(<WormSegment position={headPosition} angle={angle} id='head' />)
        while (i < length) {
            segments.push(<WormSegment position={segmentPositions[i]} id='body' />);
            i++
        };
        return segments
    };

    initializeSegmentPositions();
    moveSegments();

    const another = { x: headPosition.x + 50, y: headPosition.y + 50 }
    function test() {
        var segments = []
        segments.push(<WormSegment position={headPosition} />)
        segments.push(<WormSegment position={another} />)
        return segments
    }

    return (
        <div>
            {getSegments()}
            {readableSegmentPositions()}
        </div>
    )

};

export default Worm;