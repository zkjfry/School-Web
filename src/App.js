import React from 'react';
import SignInPage from './signInPage'
import IntroPage from './introPage'
import MainPage from './mainpage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IntroPage} />
          <Route exact path='/signIn' component={SignInPage} />
          <Route exact path='/main' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
