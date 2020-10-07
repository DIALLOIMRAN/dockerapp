import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home.component";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Component mounted");    
  }

  render() {
    return (
      <Router>
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
          </Switch>
      </Router>
    );
  }
}

export default App;