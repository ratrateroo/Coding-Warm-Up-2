import React from "react";

import logo from "./logo.svg";
import "./App.scss";
import { Login, Register } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  render() {
    return (
      <div className="App">
        <div className="login"> 
          <div className="container">
            <Login />
          </div>
        </div>
      </div>
    )
  };
 

}

export default App;
