import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./styles/_main.scss";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import Biografia from "./components/Biografia";
import Espetaculo from "./components/Espetaculo";
import Sinopse from "./components/Sinopse";
import Tema from "./components/Tema";
import Ficha from "./components/Ficha";
import Agradecimentos from "./components/Agradecimentos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Menu />
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Homepage}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/biografia"}
            component={Biografia}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/espetaculo"}
            component={Espetaculo}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/sinopse"}
            component={Sinopse}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/tema"}
            component={Tema}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/ficha"}
            component={Ficha}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/agradecimentos"}
            component={Agradecimentos}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
