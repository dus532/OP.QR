import React from "react";
import { RiotAPI, MyContext } from "./store";
import "./App.css";
import { Main, Search } from "./containers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/home";

// 환영합니다! 여기는 누구나 따라할 수 있는 전적검색 사이트
// OP.QR 입니다!
// 이 페이지는 React-router-dom을 이용하여 페이지를 라우팅합니다.
// 또한 Context API를 통해 상태 관리를 진행하죠.

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
