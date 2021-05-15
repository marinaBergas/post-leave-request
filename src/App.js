import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';

import './App.scss';
import Home from './components/home/Home';
import requestsPage from './components/requests page/requestsPage';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/table" exact component={requestsPage} />
      </Switch>
          
      </Router>
    </div>
  );
}

export default App;
