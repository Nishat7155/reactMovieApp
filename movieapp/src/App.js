import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { HomePages } from './home/HomePages';
import Footer from "./components/footer/Footer";
import SinglePage from "./components/watch/SinglePage";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePages} />
          <Route exact path='/singlePage/:id' component={SinglePage} />
             
          
        </Switch>
        <Footer />
     </Router>
    </>
  );
}

export default App;
