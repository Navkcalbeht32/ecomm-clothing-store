import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './shop/shop.component';
import SignInSignUp from './sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';



const HatsPage = () => (
  <div>
    Hats Page
  </div>
)
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unscubscribeFromAuth = null;

  componentDidMount() {
    this.unscubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

    });
  }

  componentWillUnmount() {
    this.unscubscribeFromAuth();
  }


  render() {
    return (
      <div className="body">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
