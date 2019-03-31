import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Splash, Home, About, Methodology } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentWillMount(props) {
    // check url for user id
  }

  fakeAuth = _ => this.setState({ user: { role: 'admin' } });

  fakeLogout = _ => this.setState({ user: null });

  // exchange plaid public token for access token and item id,
  // allowing all future plaid requests to authenticate.
  // TODO if the access token already exists, then use /set_access_token
  auth = (public_token) => {
    // apparently all you have to do to get the requests to authenticate is 
    // accept the response and call .json() on it without storing it. What?
    window
      .fetch('/get_access_token', {
        method: 'post', // or 'PUT'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({public_token: public_token}), // data can be `string` or {object}!
      })
      .then((response) => {
        this.setState({ user: { role: 'admin' } });
        response.json();
      }).catch((error) => {
        console.log("big bad")
      })
      this.setState({ user: { role: 'authenticating' }})
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header onAuth={this.auth} logout={this.fakeLogout} user={this.state.user} />
          <Route
            exact
            path="/"
            component={this.state.user ? Home : Splash}
            user={this.state.user}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/methodology" component={Methodology} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
