import React from "react";
import { RiotAPI, MyContext } from "./store";
import "./App.css";
import { Main } from "./containers";

function App() {
  return (
    <MyContext.Provider value={{ ...RiotAPI() }}>
      <Main />
    </MyContext.Provider>
  );
}

export default App;
