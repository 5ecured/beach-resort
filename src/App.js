import React, { Fragment } from 'react'
import './App.css'
import Home from './components/pages/Home'
import Rooms from './components/pages/Rooms'
import SingleRoom from './components/pages/SingleRoom'
import Error from './components/pages/Error'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
