import React from 'react';
import './App.css'
import { Route } from 'react-router';
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import Detail from '../components/Detail';


const App = ({ state }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="slider mb-3">
          <div className="opacity">
            <div className="slider-text">
              <h1 className="text">Cinema</h1>
            </div>
          </div>
        </div>
        <Route path="/" exact>
          <div className="container">
            <div className="row">
              {state.map((item) => (
                <div className="col-3 mb-2 mt-2">
                  <div className="card modern">
                    <img className="card-img-top" src={item.image} />
                    <div className="card-body">
                      <h5 className="card-title text-center title-item">{item.title}</h5>
                      <p className="card-text text-de">{item.description}</p>
                      <Link to={`/items/${item.id}`} className="btn btn-primary">Detail</Link>
                    </div>
                  </div>
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
  );
};


const msp = (state) => {
  return { state }
}

export default connect(msp)(App);