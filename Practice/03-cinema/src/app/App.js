import React from 'react';
import './App.css'
import { Route } from 'react-router';
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from '../components/Detail';
import Card from '../components/Card';


const App = ({ state }) => {
  return (
    <div className="back">
      <header>
        <Navbar />
      </header>
      <div className="container">
        <main>
          <Route path="/" exact>
            <div className="slider">
              <div className="opacity">
                <div className="slider-text">
                  <h1 className="text">Cinema</h1>
                </div>
              </div>
            </div>
            <div className="container border con-card">
              <div className="row">
                {state.map((item) => (
                  <div className="col-md-3 animate-link mb-2 mt-2">
                    <Card item={item} />
                  </div>
                ))}
              </div>
            </div>
          </Route>
          <Route path="/items/:id">
            <Detail state={state} />
          </Route>
        </main>
      </div>
    </div>
  );
};


const msp = (state) => {
  return { state }
}

export default connect(msp)(App);