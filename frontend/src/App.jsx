import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Authenticated, Splash, Home, About, Signin } from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isOpen: false
    };
  }

  displayPopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentWillMount(props) {
    // check url for user id
  }

  fakeAuth = _ => this.setState({ user: { role: "admin" } });

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            displayPopup={this.displayPopup}
            onAuth={this.fakeAuth}
            isOpen={this.state.isOpen}
          />
          {this.state.user ? <Home user={this.state.user} /> : <Splash />}
          {/* <Route exact path="/" component={Splash} /> */}
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
