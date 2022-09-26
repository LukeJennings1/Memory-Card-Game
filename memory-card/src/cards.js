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
import LevelCrossingSign from './card photos/levelCrossing.png'
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
    LevelCrossingSign,
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


const scoreLogic = (event) => {
    console.log(event.target.src)
 if (event.target.src === "http://localhost:3000/static/media/pngwing.com%20(4).558ce526aeee659c8ff7.png") {
     return (
        setScore([...score, StopSign]),
        console.log(score),
        console.log(score.length)
    )
}
else if (event.target.src === "http://localhost:3000/static/media/giveway.ed5efc722debbf86bc8b.png") {
    return (
        setScore([...score, GivewaySign]),
   console.log(score),
   console.log(score.length)
   )
}
else if (event.target.src === "http://localhost:3000/static/media/roundabout.7bb50a6da6a154399779.png") {
    return (
        setScore([...score, RoundAboutSign]),
        console.log(score),
        console.log(score.length)
   )
}
}

    return (
<div className='cardsDivWrapper'>
    <form className="cardsWrapper">
        <input type='image' src={signs[0]} className='cards' id = 'stopSign' onClick={event => {
            scoreLogic(event);
            cardLogic(event);
            }}></input>
        <input type='image' src={signs[1]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[2]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[3]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[4]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[5]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[6]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[7]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[8]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[9]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[10]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
        <input type='image' src={signs[11]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
            }}></input>
    </form>
    <div className='CurrentScoreDisplay'>Score: {score.length}</div>
    {/* <div>{score}</div> */}

</div>  
    )
}
// when we click an image it needs to be added to a new array. the array.length is the current score. 
// some logic should be in place on the function that adds the image to the array that states that 
// if the image clicked is aleady in the array then it gets rejected and resets the entire array. 
// this will also reset the score as it is array.length and the length will now be 0. 


export default Cards; 








