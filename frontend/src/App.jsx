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

  // STUCK HERE post request is failing. The body of the post request is undefined
  // according to the server.
  auth = (public_token) => {
    console.log('public token', public_token)
    window
    .fetch('/get_access_token', {
      method: 'post', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({public_token: public_token}), // data can be `string` or {object}!
    })
    .then(function (data) {
      console.log("access token response: ");
      console.log(data);
    });
    this.setState({ user: { role: 'admin' } });
  }

  render() {
    console.log("Your process.env.PUBLIC_URL: " + process.env.PUBLIC_URL);
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
