import './App.css';
import DrinkCard from './components/drinkCard';
import Fetching from './components/fetching';
import { fetchDrink } from './actions';
import { connect } from 'react-redux';

function App(props) {

  const handleClick = () => {
    props.fetchDrink();
  }
  
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Random Drink Generator!</h1>
        <p>Click to generate a random cocktail recipe.</p>
        <button className="btn" onClick={handleClick}>Randomize!</button>
      </div>
      { props.fetching ? <Fetching /> : <span></span> }
      { props.drink.length !== 0 ? <DrinkCard /> : <span></span> }
    </div>
    
  );
}

const mapStatetoProps = (state) => {
  return {
    drink: state.drink,
    fetching: state.fetching
  }
}

export default connect(mapStatetoProps, { fetchDrink })(App);
