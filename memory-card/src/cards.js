import './main.css'
import {useState, useEffect} from 'react'
import StopSign from './card photos/pngwing.com (4).png'
import GivewaySign from './card photos/giveway.png'
import RoundAboutSign from './card photos/roundabout.png'
import RoadWorksSign from './card photos/pngwing.com (3).png'
import CrossingSign from './card photos/pngwing.com (2).png'
import GradientSign from './card photos/pngwing.com.png'
import TrafficLight from './card photos/trafficLight.png'
import NationalSpeedLimit from './card photos/pngwing.com (1).png'
import TonkSign from './card photos/tonk.png'
import NoCyclingSign from './card photos/nocycling.png'
import TunnelSign from './card photos/TunnelSign.png'
import NoUTurnSign from './card photos/noUTurnSign.png'



function Cards() {

const roadSigns = [
    StopSign, 
    GivewaySign,
    RoundAboutSign,
    RoadWorksSign,
    CrossingSign,
    GradientSign,
    TrafficLight,
    NationalSpeedLimit,
    TonkSign,
    NoCyclingSign,
    TunnelSign,
    NoUTurnSign]

const [signs, setSigns] = useState(roadSigns)


const cardLogic = (e) => {
    e.preventDefault();
    const arraySoftCopy = [...roadSigns]
    // REMEMBER, the spread operator ^^ makes a softcopy which allows us to use the sort method. If we did not use
    // this then it would not work as sort() mutates the original array so react rejects it. 
  setSigns(arraySoftCopy.sort((a,b) => 0.5 - Math.random()));
}




const [score, setScore] = useState([])

function stopSign(event) {
if (score.includes(StopSign) === true && event.target.src === "http://localhost:3000/static/media/pngwing.com%20(4).558ce526aeee659c8ff7.png") {
    return (
        setScore([])
    )}
else if (score.includes(GivewaySign) === true && event.target.src === "http://localhost:3000/static/media/giveway.ed5efc722debbf86bc8b.png") {
    return (
        setScore([])
    )}
else if (score.includes(RoundAboutSign) === true && event.target.src === "http://localhost:3000/static/media/roundabout.7bb50a6da6a154399779.png") {
    return (
        setScore([])
    )} 
else if (score.includes(RoadWorksSign) === true && event.target.src === "http://localhost:3000/static/media/pngwing.com%20(3).22114961d3eebc0acd57.png") {
    return (    
        setScore([])
    )}
else if (score.includes(CrossingSign) === true && event.target.src === "http://localhost:3000/static/media/pngwing.com%20(2).4e3987bb6ef274cc79fd.png") {
    return (    
        setScore([])
    )}
else if (score.includes(GradientSign) === true && event.target.src === "http://localhost:3000/static/media/pngwing.com.d41ab15dcc19b5860ec1.png") {
    return (    
        setScore([])
    )}
else if (score.includes(TrafficLight) === true && event.target.src === "http://localhost:3000/static/media/trafficLight.7ff4a20421f24a578606.png") {
    return (    
        setScore([])
    )}
else if (score.includes(NationalSpeedLimit) === true && event.target.src === "http://localhost:3000/static/media/pngwing.com%20(1).3e71a86c9196d9fe0336.png") {
    return (    
        setScore([])
    )}
else if (score.includes(TonkSign) === true && event.target.src === "http://localhost:3000/static/media/tonk.b4b2bc5e51a9715ef48a.png") {
    return (    
        setScore([])
    )}
else if (score.includes(NoCyclingSign) === true && event.target.src === "http://localhost:3000/static/media/nocycling.29a16a7cfa4369946783.png") {
    return (    
        setScore([])
    )}
else if (score.includes(TunnelSign) === true && event.target.src === "http://localhost:3000/static/media/TunnelSign.25c28b0d324a73a237cb.png") {
    return (    
        setScore([])
    )}
else if (score.includes(NoUTurnSign) === true && event.target.src === "http://localhost:3000/static/media/noUTurnSign.fb906dc9b1b59a5c43fa.png") {
    return (    
        setScore([])
    )}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const [HighScore, setHighScore] = useState(score.length);

useEffect(()=> {
    if (score.length > 0 && HighScore < score.length ) {
        return setHighScore(score.length)
    }
},[score])


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const scoreLogic = (event) => {
 if (event.target.src === "http://localhost:3000/static/media/pngwing.com%20(4).558ce526aeee659c8ff7.png") {
     return (
        setScore([...score, StopSign])) 
}
else if (event.target.src === "http://localhost:3000/static/media/giveway.ed5efc722debbf86bc8b.png") {
    return (
        setScore([...score, GivewaySign]))
}
else if (event.target.src === "http://localhost:3000/static/media/roundabout.7bb50a6da6a154399779.png") {
    return (
        setScore([...score, RoundAboutSign]))
}  //
else if (event.target.src === "http://localhost:3000/static/media/pngwing.com%20(3).22114961d3eebc0acd57.png") {
    return (
        setScore([...score, RoadWorksSign]))
} 
else if (event.target.src === "http://localhost:3000/static/media/pngwing.com%20(2).4e3987bb6ef274cc79fd.png") {
    return (
        setScore([...score, CrossingSign]))
} 
else if (event.target.src === "http://localhost:3000/static/media/pngwing.com.d41ab15dcc19b5860ec1.png") {
    return (
        setScore([...score, GradientSign]))
} 
else if (event.target.src === "http://localhost:3000/static/media/trafficLight.7ff4a20421f24a578606.png") {
    return (
        setScore([...score, TrafficLight]))
} 
else if (event.target.src === "http://localhost:3000/static/media/pngwing.com%20(1).3e71a86c9196d9fe0336.png") {
    return (
        setScore([...score, NationalSpeedLimit]))
} 
else if (event.target.src === "http://localhost:3000/static/media/tonk.b4b2bc5e51a9715ef48a.png") {
    return (
        setScore([...score, TonkSign]))
} 
else if (event.target.src === "http://localhost:3000/static/media/nocycling.29a16a7cfa4369946783.png") {
    return (
        setScore([...score, NoCyclingSign]))
} 
else if (event.target.src === "http://localhost:3000/static/media/TunnelSign.25c28b0d324a73a237cb.png") {
    return (
        setScore([...score, TunnelSign]))
} 
else if (event.target.src === "http://localhost:3000/static/media/noUTurnSign.fb906dc9b1b59a5c43fa.png") {
    return (
        setScore([...score, NoUTurnSign]))
} 
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
<div className='cardsDivWrapper'>
    <form className="cardsWrapper">
        <input type='image' src={signs[0]} className='cards' id = 'stopSign' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[1]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[2]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[3]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[4]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[5]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[6]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[7]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[8]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[9]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[10]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
        <input type='image' src={signs[11]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            stopSign(event);
            }}></input>
    </form>
    <div className='CurrentScoreDisplay'>Score: {score.length}</div>
    <div className='HighScoreDisplay'>{HighScore}</div>
</div>  
    )
}
// need to implement a highest score. the useEffect hook can be run every time the score array is updated. 
// this useEffect hook can update a variable that holds the best score. 



export default Cards; 







