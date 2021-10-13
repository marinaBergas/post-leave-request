import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import FormFieldset from "./components/form-fieldset/FormFieldset";
import RequestsPage from "./components/requests page/requestsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={RequestsPage} />
        <switch>
          <Route path="/form" exact component={FormFieldset} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
