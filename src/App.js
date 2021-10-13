import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import FormFieldset from "./components/form-fieldset/FormFieldset";
import RequestsPage from "./components/requests page/requestsPage";

function App() {
  return (
    <div className="App">
      <RequestsPage />
      <Router>
        <Route path="/form" exact component={FormFieldset} />
        <Route path="/" exact component={RequestsPage} />
      </Router>
    </div>
  );
}

export default App;
