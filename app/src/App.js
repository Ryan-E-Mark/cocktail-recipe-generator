
import './App.css';
import DrinkCard from './components/drinkCard';
import Fetching from './components/fetching';
import axios from 'axios';
import { fetchDrink } from './actions';

import { connect } from 'react-redux';

function App(props) {

  const handleClick = () => {
    props.fetchDrink();
  }

  return (
    <div>
      <h1>Random Drink Generator!</h1>
      { props.fetching ? <Fetching /> : <span></span> }
      { props.drink.length != 0 ? <DrinkCard /> : <span></span> }
      <div>
        <p>Click to generate a random drink recipe.</p>
        <button onClick={handleClick}>Randomize!</button>
      </div>
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
