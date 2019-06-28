import React from "react";
import { RiotAPI, MyContext } from "./store";
import "./App.css";
import { Main, Search } from "./containers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/home";

function App() {
  return (
    <MyContext.Provider value={{ ...RiotAPI() }}>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/search/:username" component={Search} />
            <Route component={Main} />
          </Switch>
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
