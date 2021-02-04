import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      {/* Before Routing Assessment
      <Welcome name="Evelyn" />
      <Clock />
      <Contact /> */}
      <Navigation />
      <Route
        exact
        path="/"
        render={(props) => <Welcome {...props} name="Evelyn" />}
      />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/jeopardy" component={Jeopardy} />
    </div>
  );
}

export default App;
