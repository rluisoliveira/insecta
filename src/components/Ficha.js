import React, { Component } from "react";

class Ficha extends Component {
  render() {
    return (
      <div className="Ficha">
        <div className="left">
          <h2>Ficha Técnica</h2>
          <ul>
            <li>
              <span className="bold">Local:</span> ESMAE - Teatro Helena Sá e
              Costa
            </li>
            <li>
              <span className="bold">Data:</span> 1 de Junho
            </li>
            <li>
              <span className="bold">Coreografia:</span> Ricardo Luís Oliveira
            </li>
            <li>
              <span className="bold">Intérpretes:</span> Catarina Alves, Hugo
              Magalhães, Inês Alves, Inês Gonçalves, Liliana Mota e Luís
              Oliveira
            </li>
            <li>
              <p className="bold">Música:</p>
              <p className>
                {" "}
                Debussy: Reverie 68 - Second Storey & Appleblim Rework
              </p>
              <p className> Over here - Appleblim, Peverelist</p>
              <p className> Drumming - Four Tet Remix - Steve Reich</p>
              <p className>
                {" "}
                Recomposed By Max Richter: Vivaldi, The Four Seasons: Spring 0
              </p>
              <p className>
                {" "}
                Recomposed By Max Richter: Vivaldi, The Four Seasons: Spring 1
              </p>
            </li>
            <li>
              <span>
                <span className="bold">Figurinos:</span> Luís Oliveira
              </span>
            </li>
            <li>
              <span>
                <span className="bold">Desenho de Luz:</span> Paulo Ribeiro e
                Diogo Teixeira
              </span>
            </li>
          </ul>
        </div>
        <div className="right" />
      </div>
    );
  }
}

export default Ficha;
