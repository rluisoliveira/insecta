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
          <Route exact path="/" component={Homepage} />
          <Route exact path="/insecta" component={Homepage} />
          <Route exact path="/biografia" component={Biografia} />
          <Route exact path="/espetaculo" component={Espetaculo} />
          <Route exact path="/sinopse" component={Sinopse} />
          <Route exact path="/tema" component={Tema} />
          <Route exact path="/ficha" component={Ficha} />
          <Route exact path="/agradecimentos" component={Agradecimentos} />
        </Switch>
      </div>
    );
  }
}

export default App;
