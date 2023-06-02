import React from 'react';
import './App.css';
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
        <Switch>
          <Route path='/about'>
             
          </Route>
        </Switch>
     </Router>
    </>
  );
}

export default App;
