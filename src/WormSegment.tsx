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

function Worm({ headPosition }) {
    const length = 3;
    const [segmentPositions, setSegmentPositions] = useState([{ x: 500, y: 200 }, { x: 300, y: 200 }, { x: 100, y: 200 }]);

    function moveSegments() {
        var i = 1;
        segmentPositions[0] = headPosition
        var parentPosition = segmentPositions[0];
        var newSegmentPositions = segmentPositions;
        while (i <= length) {
            newSegmentPositions[i] = segmentPositions[i - 1];
            i++
        };
        setSegmentPositions(newSegmentPositions);
    };

    function getSegments() {
        var i = 0;
        var segments = [];
        while (i < length) {
            segments.push(<WormSegment position={segmentPositions[i]} />);
            i++
        };
        return segments
    };

    /*
    moveSegments();
    */

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
        </div>
    )

};

export default Worm;