import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import './App.scss';

import About from './containers/About';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import Work from './containers/Work';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Work />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
