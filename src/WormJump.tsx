import './Worm.css'

function WormJumping({ angle = 0, flip = false }) {
    const scale = flip ? -1 : 1

    const wormStyle = {
        rotate: angle.toString() + 'deg',
        transform: 'scale(' + scale.toString() + ', ' + scale.toString() + ')'
    };

    return (
        <div className='Jumping' style={wormStyle} />
    );
};

export default WormJumping;