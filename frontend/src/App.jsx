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

  render() {
    console.log("Your process.env.PUBLIC_URL: " + process.env.PUBLIC_URL);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header onAuth={this.fakeAuth} logout={this.fakeLogout} user={this.state.user} />
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
