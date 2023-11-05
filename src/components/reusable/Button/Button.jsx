import React from "react";

import classnames from "classnames";

const Button = ({ className, onClick, children }) => {
  return (
    <button className={classnames("btn", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
