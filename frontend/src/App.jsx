import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Authenticated, Splash, Home, About} from './components';

class App extends Component {
  state = { user: null };
  componentWillMount(props) {
    // check url for user id
  }

  fakeAuth = _ => this.setState({ user: { role: null } });

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          {/* {this.state.user ? (
            <Authenticated user={this.state.user} />
          ) : (
            <Home onAuth={this.fakeAuth} />
          )} */}
          <Route exact path="/" component={Splash} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
