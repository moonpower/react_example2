import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Home,About} from './pages';
import Menu from './components/Menu'
import { Route,Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Menu/>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
