import'./main.css'
import {useState, useEffect} from 'react'
import StopSign from './card photos/stop.jpg'
import GivewaySign from './card photos/giveway.jpg'
import RoundAboutSign from './card photos/roundabout.jpg'
import NoLeftTurnSign from './card photos/noleftturn.jpg'
import NoUTurnSign from './card photos/nouturn.jpg'
import OneWaySign from './card photos/oneway.jpg'
import PedestrianSign from './card photos/pedest.jpg'
import PrioritySign from './card photos/priority.jpg'

function Cards() {

const roadSigns = [StopSign,GivewaySign,RoundAboutSign,NoLeftTurnSign,NoUTurnSign,OneWaySign,PedestrianSign,PrioritySign]

const [signs, setSigns] = useState(roadSigns)


const cardLogic = (e) => {
    e.preventDefault();
    const arraySoftCopy = [...roadSigns]
    // REMEMBER, the spread operator ^^ makes a softcopy which allows us to use the sort method. If we did not use
    // this then it would not work as sort() mutates the original array so react rejects it. 
  setSigns(arraySoftCopy.sort((a,b) => 0.5 - Math.random()));

 
  console.log(signs)
}
const scoreLogic = (event) => {
    console.log(event)
}
useEffect((e) => {
    console.log('dom-render')
     }, [signs])
    return (
<div className='cardsDivWrapper'>
    <form className="cardsWrapper">
        <input type='image' src={signs[0]} className='cards' onClick={event => {
            cardLogic(event);
            scoreLogic(event);
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
    </form>
</div>  
    )
}
// when we click an image it needs to be added to a new array. the array.length is the current score. 
// some logic should be in place on the function that adds the image to the array that states that 
// if the image clicked is aleady in the array then it gets rejected and resets the entire array. 
// this will also reset the score as it is array.length and the length will now be 0. 


export default Cards; 








