import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import 'overlayscrollbars/overlayscrollbars.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='body'>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </div>
    </div>
  );
}

export default App;
