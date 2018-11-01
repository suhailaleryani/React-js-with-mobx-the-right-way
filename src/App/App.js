import React, { Component } from 'react';
import './App.css';
import AppStore from './AppStore';
import CarsComponent from '../Cars/components/CarsComponent';

class App extends Component {

  static store = new AppStore();

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Welcome to react-mobx the right way</p>
        </header>
        <section>
          <CarsComponent store={App.store.carsStore} />
        </section>
      </div>
    );
  }
}

export default App;
