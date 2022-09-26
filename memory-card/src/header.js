import './main.css'
import learnerImage from './card photos/128px-Lplate.svg.png'


function Header() {


    return (
        <div className="headerMasterWrapper">
            <div className="headerBar"></div>
                <img src = {learnerImage} className = 'LearnerImages' id = 'learnerImageLeft'></img>
            <div className="headerTextContent">Theory Test Sign Game</div>
                <img src = {learnerImage} className = 'LearnerImages' id = 'learnerImageRight'></img>
        </div>
    )
}

export default Header;