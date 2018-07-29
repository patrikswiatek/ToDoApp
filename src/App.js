import React, {Component} from 'react';
import HashRouter from 'react-router-dom/es/HashRouter';
import Route from 'react-router-dom/es/Route';
import Switch from 'react-router-dom/es/Switch';
import Main from './components/main.jsx';
import './App.css';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
