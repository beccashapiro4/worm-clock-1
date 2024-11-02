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

    /*
    moveSegments();

    return (
        <div>
            {getSegments()}
        </div>

    );
    */

    const another = { x: headPosition.x + 50, y: headPosition.y + 50 }
    function test() {
        var segments = [<WormSegment position={headPosition} />, <WormSegment position={another} />]
        return segments
    }

    return (
        <div>
            {test()}
        </div>
    )

};

export default Worm;