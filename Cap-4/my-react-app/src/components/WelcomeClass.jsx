import React from "react";
import PropTypes from "prop-types";

class WelcomeClass extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
}

WelcomeClass.propTypes = {
  name: PropTypes.string,
};

export default WelcomeClass;
