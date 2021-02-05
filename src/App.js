import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      {/* Before Routing Assessment
      <Welcome name="Evelyn" />
      <Clock />
      <Contact /> */}
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Evelyn" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
