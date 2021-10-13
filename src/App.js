import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.scss";
import FormFieldset from "./components/form-fieldset/FormFieldset";
import RequestsPage from "./components/requests page/requestsPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/form" exact component={FormFieldset} />
          <Route path="/" exact component={RequestsPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
