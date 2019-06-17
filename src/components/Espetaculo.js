import React, { Component } from "react";

class Espetaculo extends Component {
  render() {
    return (
      <div className="Espetaculo">
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="500px"
          height="500px"
          viewBox="0 0 500 500"
          enableBackground="new 0 0 500 500"
          className="borboleta borboleta-1"
        >
          <g>
            <polygon points="394,205 252,264 310,334 	" />
            <polygon points="92,230 190,349 241,274 	" />
          </g>
        </svg>
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="500px"
          height="500px"
          viewBox="0 0 500 500"
          enableBackground="new 0 0 500 500"
          className="borboleta borboleta-2"
        >
          <g>
            <polygon points="394,205 252,264 310,334 	" />
            <polygon points="92,230 190,349 241,274 	" />
          </g>
        </svg>

        <h1 className="title-espec">Objetivos</h1>
        <p className="p-espec">
          Um dos grandes objetivos deste espetáculo é sensibilizar o público
          para o estado de conservação desta espécie animal, através da beleza e
          da vulnerabilidade das borboletas associado ao seu movimento. A
          borboleta monarca encontra-se, atualmente, na lista de espécie em vias
          de extinção e estudos estimam que o número de espécimes pode
          desaparecer por completo num período de 20 a 25 anos.
          <br />
          As borboletas monarca são extremamente importantes para o bom
          desenvolvimento do meio ambiente uma vez que desempenham funções
          cruciais como a polinização de várias plantas. Para além disto, também
          constituem uma fonte de alimento para outros animais. Com o seu
          desaparecimento, várias espécies de plantas podem apresentar
          dificuldades em sobreviver devido à falta de polinização, o que coloca
          em risco todo o funcionamento do ecossistema. Este é só um dos vários
          efeitos negativos associados ao risco de extinção das borboletas.
          <br />
          Para mais informações sobre a importância das borboletas monarca e o
          que fazer para ajudar na sua sobrevivência visite o site da &nbsp;
          <a
            target="_blank"
            href="https://www.worldwildlife.org/species/monarch-butterfly"
          >
            World Wild Life.
          </a>
        </p>
      </div>
    );
  }
}

export default Espetaculo;
