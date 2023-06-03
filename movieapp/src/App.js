import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import {
  BrowserRouter as
  Router,
  Route,
  Switch
} from "react-router-dom";
import { HomePages } from './home/HomePages';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePages}>
             
          </Route>
        </Switch>
     </Router>
    </>
  );
}

export default App;
