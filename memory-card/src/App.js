import logo from './logo.svg';
import './App.css';
import Cards from './cards'
import ScoreBoard from './score'
import Header from './header'

function App() {
  return (
    <div className="App">
      <Header />

      <Cards />
    </div>

  );
}

export default App;


// Scoreboard - current and best score 
// cards - display images - these should be buttons 
// random order - these images should change randomly on every click


// Start with the cards, this should be a grid with 8 divs 