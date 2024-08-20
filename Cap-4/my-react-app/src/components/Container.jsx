// import { Children } from "react";
// import PropTypes from "prop-types";

/* eslint-disable react/prop-types */

function Container({ children }) {
  return <div>{children}</div>;
}

// PropTypes quando for passar outro componente react
// Container.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

export default Container;
