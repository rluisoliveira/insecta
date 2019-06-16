import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { MENU } from "../redux";
import { Link } from "react-router-dom";

library.add(faFacebookSquare, faInstagram, faPaperPlane, faTimes);

class Menu extends Component {
  constructor(props) {
    super(props);

    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.props.changeMenuState(false);
  }

  render() {
    return (
      <div className={this.props.menu ? "Menu active-menu" : "Menu"}>
        <div>
          <span className="close" onClick={this.closeMenu}>
            <FontAwesomeIcon size="2x" icon={faTimes} />
          </span>
        </div>
        <div>
          <ul>
            <Link to="/" onClick={this.closeMenu}>
              <li className="li-1">Homepage</li>
            </Link>
            <Link to="/biografia" onClick={this.closeMenu}>
              <li className="li-2">Biografia</li>
            </Link>
            <Link to="/sinopse" onClick={this.closeMenu}>
              <li className="li-3">Sinopse</li>
            </Link>
            <Link to="/espetaculo" onClick={this.closeMenu}>
              <li className="li-4">Objetivo</li>
            </Link>
            <Link to="/tema" onClick={this.closeMenu}>
              <li className="li-5">Tema</li>
            </Link>
            <Link to="/ficha" onClick={this.closeMenu}>
              <li className="li-6">Ficha Técnica</li>
            </Link>
            <Link to="/agradecimentos" onClick={this.closeMenu}>
              <li className="li-7">Agradecimentos</li>
            </Link>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://www.facebook.com/rluisoliveira" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rluisoliveira/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="mailto:luisoliveira.rr@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faPaperPlane} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

//Obter Redux State
const mapStateToProps = function(state) {
  return {
    menu: state.menu
  };
};

//Mudar Redux State
const mapDispatchToProps = dispatch => {
  return {
    changeMenuState: menu => {
      dispatch(MENU(menu));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
