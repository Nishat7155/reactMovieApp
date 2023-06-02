import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import {
  BrowserRouter as
  Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/about'>
             
          </Route>
        </Switch>
     </Router>
    </>
  );
}

export default App;
