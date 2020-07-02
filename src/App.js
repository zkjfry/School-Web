import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './signUpPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignUpPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
