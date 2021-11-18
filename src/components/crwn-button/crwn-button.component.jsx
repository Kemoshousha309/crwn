import React from "react"
import "./crwn-button.styles.scss";

const CrwnButton = ({children, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)
export default CrwnButton;