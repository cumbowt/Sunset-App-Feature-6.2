//  This is a component
import React from "react";
// Import react library
const AuthModule = ({ component }) => {
  //  Define function AuthModule and pass the arguement: component which will be rendered below
  return <section> {component} </section>;
  //  This returns a section element and sets the component as it's child
};

export default AuthModule;
//  This exports the AuthModule component to be used in other parts of the app
