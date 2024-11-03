import './App.css'
import './Worm.css'

/*
change this to TRUE to make worms wiggle
 */
const SHOULD_WIGGLE = false;

function angleGivenIndex(i = 0) {
    return i * Math.PI * 2 - (Math.PI / 2);
};

function effectiveRadiusForSegment(segmentNumber, radius) {
    if (!SHOULD_WIGGLE) {
        return radius
    }

    let positionInCycle = ((segmentNumber % 10) / 10) * Math.PI * 2;
    let amplitude = 6;
    let offset = amplitude * Math.cos(positionInCycle);
    return radius + offset;
}

function positionAroundCircle(center, radius, i) {
    const angle = angleGivenIndex(i);
    const x: number = center.x - 20 + radius * Math.cos(angle);
    const y: number = center.y - 20 + radius * Math.sin(angle);
    return ({ x, y });
};

function hueGivenRadius(radius = 100) {
    if (radius == 200) { /* sec worm */
        return 120
    } else if (radius == 250) { /* min worm */
        return 240
    } else { /* hours worm */
        return 0
    };
}

function WormSegment({ position, angle = 0, hue = 120, saturation = 100, id = 'body' }) {

    const wormStyle = {
        left: position.x,
        top: position.y,
        rotate: angle.toString() + 'rad',
        filter: 'hue-rotate(' + hue + 'deg) saturate(' + saturation + '%)',
        opacity: saturation + '%'
    };

    return (
        <div className='Segment' id={id} style={wormStyle}> </div>
    )
}

/* 
index is a number from 0-1 that maps to an angle around the circle
*/
function Worm({ index = 0, center = { x: 200, y: 200 }, radius = 100, wiggleConstant = 0, length = 20 }) {
    const headAngle = angleGivenIndex(index);

    function saturationGivenSegmentNumber(segmentNumber) {
        if (segmentNumber < length / 2) {
            return 100;
        } else {
            let fadeFactor = (segmentNumber - length / 2) / (length / 2);
            return (1 - fadeFactor) * 100;
        }
    }

    function getSegments() {
        var i = 1;
        var segments = [];
        var segmentIndex = index
        let headRadius = effectiveRadiusForSegment(wiggleConstant, radius);
        let headPosition = positionAroundCircle(center, headRadius, index);
        let hue = hueGivenRadius(radius);
        segments.push(
            <WormSegment
                position={headPosition}
                angle={headAngle}
                hue={hue}
                id='head'
            />
        );

        while (i < length) {
            segmentIndex = (segmentIndex - 0.01) % 1;
            let er = effectiveRadiusForSegment(i + wiggleConstant, radius);
            let pos = positionAroundCircle(center, er, segmentIndex);
            let a = (angleGivenIndex(segmentIndex) + Math.PI / 2) % (Math.PI * 2);
            let sat = saturationGivenSegmentNumber(i);
            segments.push(
                <WormSegment
                    position={pos}
                    angle={a}
                    hue={hue}
                    saturation={sat}
                    id='body'
                />
            );
            i++
        };
        return segments.reverse();
    };

    return (
        <div>
            {getSegments()}
        </div>
    )

};

export default Worm;