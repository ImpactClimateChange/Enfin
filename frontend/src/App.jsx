import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Splash, Home, About, Methodology, Loading } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentWillMount(props) {
    // check url for user id
  }

  fakeAuth = _ => this.setState({ user: { role: 'customer' } });

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
      .then((response) => response.json())
      .then((tokenData) => {
        this.setState({ user: { role: 'customer', tokenData: tokenData } });
        console.log("Authenticated with plaid successfully")
        console.log(tokenData);
      })
      .catch((error) => {
        console.log("big bad, authentication failed")
      })
      this.setState({ user: { role: 'authenticating' }})
  }

  render() {
    let mainDisplayComponent = Splash;
    let authed = false;
    if (this.state.user) {
      if (this.state.user.role === "customer") {
        authed = true;
        mainDisplayComponent = Home;
      } else if (this.state.user.role === "authenticating") {
        mainDisplayComponent = Loading;
      }
    }

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header onAuth={this.auth} logout={this.fakeLogout} user={this.state.user} />
          <Route
            exact
            path="/"
            component={mainDisplayComponent}
            render={() => <mainDisplayComponent isAuthed={authed} />}
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
