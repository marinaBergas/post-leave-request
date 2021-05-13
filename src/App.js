import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';

import './App.scss';
import Home from './components/home/Home';
import Requests from './components/manager requests/Requests';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/table" exact component={Requests} />
            </Switch>
          
          </Router>
    </div>
  );
}

export default App;
