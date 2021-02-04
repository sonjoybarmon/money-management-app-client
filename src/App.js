import './App.css';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/' component={Register}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
