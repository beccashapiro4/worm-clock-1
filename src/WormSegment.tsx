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
    const length = 20;
    const [segmentPositions, setSegmentPositions] = useState(Array<{ x: 200, y: 200 }>(20));

    function moveSegments() {
        var i = 1;
        segmentPositions[0] = headPosition
        var parentPosition = segmentPositions[0];
        var newSegmentPositions = segmentPositions;
        while (i <= length) {
            newSegmentPositions[i] = segmentPositions[i - 1];
        };
        setSegmentPositions(newSegmentPositions);
    };

    function getSegments() {
        var i = 0;
        const segments = [];
        while (i < length) {
            segments[i] = (<WormSegment position={segmentPositions[i]} />);
        };
        return (
            segments
        );
    };

    moveSegments();

    return (
        <div>
            {getSegments()}
        </div>

    );

};

export default WormSegment;