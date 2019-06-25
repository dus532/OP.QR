import React from "react";
import { RiotAPI, MyContext } from "./store";
import "./App.css";
import { Main } from "./containers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/home";

function App() {
  return (
    <MyContext.Provider value={{ ...RiotAPI() }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/search/:username" component={Main} />
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
