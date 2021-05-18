import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';

import './App.scss';
import Home from './components/home/Home';
import RequestsPage from './components/requests page/RequestsPage';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
            <Route path="/form" exact component={Home} />
            <Route path="/" exact component={RequestsPage} />
      </Switch>
          
      </Router>
    </div>
  );
}

export default App;
