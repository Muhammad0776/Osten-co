import React from 'react'
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Header from './containers/Header';
import Home from './pages/Home';
import About from './pages/About';
import Production from './pages/Production';
import Footer from './containers/Footer';
import Services from './pages/Services';
import Product from './pages/Products';
import Constructor from './pages/Constructor';
import News from './pages/News';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
      <Switch>
        <Route path='/production' component={Production} />
      </Switch>

      <Switch>
        <Route path='/services' component={Services} />
      </Switch>
      <Switch>
        <Route path='/product' component={Product} />
      </Switch>
      <Switch>
        <Route path='/constructor' component={Constructor} />
      </Switch>
      <Switch>
        <Route path='/news' component={News} />
      </Switch>
      <Switch>
        <Route path='/contacts' component={Contacts} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
