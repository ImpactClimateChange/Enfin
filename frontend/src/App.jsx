import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Splash, Home, About, Methodology } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { role: 'admin' }
    };
  }
  componentWillMount(props) {
    // check url for user id
  }

  fakeAuth = _ => this.setState({ user: { role: 'admin' } });

  fakeLogout = _ => this.setState({ user: null });

  render() {
    return (
      <BrowserRouter>
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
