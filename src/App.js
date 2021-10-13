import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import FormFieldset from "./components/form-fieldset/FormFieldset";
import RequestsPage from "./components/requests page/requestsPage";

function App() {
  return (
    <div className="App">jjjj
      <RequestsPage />
      <Router>
        <Switch>
          <Route path="/form" exact component={FormFieldset} />
          <Route path="/" exact component={RequestsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
