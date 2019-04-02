import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import NotFoundPage from "./components/NotFoundPage";

import "./App.css";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Switch>
          <Route render={() => <NotFoundPage />} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
