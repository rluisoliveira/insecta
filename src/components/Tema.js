import React, { Component } from "react";

class Tema extends Component {
  render() {
    return (
      <div className="Tema">
        <div className="black">
          <div className="sec-1">
            <h1 className="title">Tema</h1>
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
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="500px"
              height="500px"
              viewBox="0 0 500 500"
              enableBackground="new 0 0 500 500"
              className="borboleta borboleta-3"
            >
              <g>
                <polygon points="394,205 252,264 310,334 	" />
                <polygon points="92,230 190,349 241,274 	" />
              </g>
            </svg>
            <p className="p-1">
              As borboletas monarca (Danaus plexippus) pertencem à ordem
              Lepidoptera e à classe Insecta, dando título a este espetáculo. A
              vida destas borboletas pode ser extremamente curta, durante apenas
              poucas semanas, mas durante este curto período sofrem uma
              metamorfose extraordinária e efetuam uma das grandes e mais
              notáveis migrações de toda a classe dos insetos. Para isto,
              apresentam um excelente sentido de orientação que é comparado a um
              compasso natural, auxiliando as borboletas na sua migração.
              <br /> Para além da sua beleza natural, uma das principais
              características das borboletas é a sua delicadeza e o movimento
              associado a esta. Cada indivíduo desloca-se por si próprio, mas em
              conjunto com outros para atingir um destino em comum. Partindo
              deste fenómeno e das características da espécie, este espetáculo
              pretende captar a ideia de um coletivo em deslocação, mas não
              necessariamente em completo uníssono. Cada corpo é livre e
              singular, com a sua própria transformação e evolução, mas sempre
              em contacto com outros corpos. O ciclo de vida desta espécie
              compreende três grandes etapas: a fase da lagarta, a fase da
              crisálida e a fase adulta. Estas etapas vão marcar e guiar o
              espetáculo em três grandes momentos através de uma linha temporal
              evolutiva.
            </p>
          </div>
        </div>
        <div className="fase-1">
          <div>
            <h1 className="h1 h1-1">Fase da Lagarta</h1>
            <p className="fase-1__text">
              A fase da lagarta é a principal fase de crescimento da borboleta.
              Apesar das lagartas apresentarem um movimento lento, a sua
              deslocação é quase sempre contínua, fazendo poucas e breves
              paragens. Nesta fase, o movimento ondulatório e arrastado do corpo
              da lagarta é bastante característico da sua deslocação.
            </p>
          </div>
          <div className="fase-foto">
            <div className="foto foto-1" />
          </div>
        </div>
        <div className="fase-2">
          <div className="fase-foto fase-foto-2">
            <div className="foto foto-2" />
          </div>
          <div>
            <h1 className="h1 h1-2">Fase da Crisálida</h1>
            <p className="fase-2__text">
              À primeira vista esta fase parece ser a mais imóvel e não
              apresentar grande atividade, mas, de facto, é a etapa onde ocorrem
              mais mudanças e transformações. É, mais uma vez, uma transformação
              bastante lenta, mas é sempre contínua e promove o desenvolvimento
              da mais pequena célula do organismo até à formação de uma
              borboleta adulta.
            </p>
          </div>
        </div>
        <div className="fase-3">
          <div>
            <h1 className="h1 h1-3">Fase da Borboleta Adulta</h1>
            <p className="fase-3__text">
              Quando as borboletas atingem a idade adulta estão completamente
              formadas e prontas para começar a sua migração. As suas asas
              peculiares e extremamente delicadas permitem a sua deslocação até
              ao destino pretendido. O voo das borboletas transmite uma noção de
              liberdade e leveza inigualáveis e intemporais.
            </p>
          </div>
          <div className="fase-foto">
            <div className="foto foto-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tema;
