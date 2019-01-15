import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Authenticated, Splash, Home, About, Methodology} from './components';

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

  fakeAuth = _ => this.setState({ user: { role: "admin" } });

  fakeLogout = _ => this.setState({ user: null });

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            displayPopup={this.displayPopup}
            onAuth={this.fakeAuth}
            logout={this.fakeLogout}
            user={this.state.user}
          />
          {this.state.user ? <Home user={this.state.user} /> : <Splash />}
          {/* <Route exact path="/" component={Splash} /> */}
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/about" component={About} />
          <Route path="/methodology" component={Methodology} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
