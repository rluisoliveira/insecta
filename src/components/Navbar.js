import React, { Component } from "react";
import { connect } from "react-redux";
import { MENU } from "../redux";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "#707070"
    };

    this.openMenu = this.openMenu.bind(this);
    this.listenToScroll = this.listenToScroll.bind(this);
  }
  openMenu() {
    console.log(this.props.menu);
    this.props.changeMenuState(true);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll(e) {
    console.log(window.scrollY);
    if (window.scrollY > 800) {
      this.setState({ backgroundColor: "white" });
    } else {
      this.setState({ backgroundColor: "#707070" });
    }
  }

  render() {
    return (
      <div className="Navbar">
        <div className="button" onClick={this.openMenu}>
          <div className="button__icon">
            <span
              className="button__icon__bar"
              style={{ backgroundColor: this.state.backgroundColor }}
            >
              &nbsp;
            </span>
            <span
              className="button__icon__bar"
              style={{ backgroundColor: this.state.backgroundColor }}
            >
              &nbsp;
            </span>
          </div>
          <span
            className="button__text"
            style={{ color: this.state.backgroundColor }}
          >
            Menu
          </span>
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
)(Navbar);
