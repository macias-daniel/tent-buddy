import React from "react";
import { Segment } from "semantic-ui-react";
import "./ErrorSegment.css";

const ErrorSegment = ({ children }) => {
  return <Segment className= "errorBody"><p className = "errorText">{children}</p></Segment>;
};


export default ErrorSegment;
