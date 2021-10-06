import logo from './logo.svg';
import './App.css';
import DrinkCard from './components/drinkCard';

function App() {
  return (
    <div>
      <h1>Random Drink Generator!</h1>
      <DrinkCard />
      <div>
        <p>Click to generate a random drink recipe.</p>
        <button>Randomize!</button>
      </div>
    </div>
    
  );
}

export default App;
