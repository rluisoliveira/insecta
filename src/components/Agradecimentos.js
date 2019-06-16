import React, { Component } from "react";

class Agradecimentos extends Component {
  render() {
    return (
      <div className="Agradecimentos">
        <div className="ag_structure">
          <h1 className="title-agrad">Agradecimentos</h1>
          <p className="p-agrad">
            Agradeço a todas as pessoas que estiveram involvidas na criação e na
            montagem deste espetáculo, principalmente a todos os intérpretes
            pela sua contínua dedicação e empenho. Obrigado à Laura Pinto pela
            criação deste website. Obrigado a todos os apoios listados em baixo.
          </p>
          <div className="apoios">
            <div className="apoio apoio-1" />
            <div className="apoio apoio-2" />
            <div className="apoio apoio-3" />
            <div className="apoio apoio-4" />
            <div className="apoio apoio-5" />
            <div className="apoio apoio-6" />
            <div className="apoio apoio-7" />
            <div className="apoio apoio-8" />
          </div>
        </div>
      </div>
    );
  }
}

export default Agradecimentos;
