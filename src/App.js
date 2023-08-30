import React from "react";
import "../src/Styles/styles.css";
import Components from "./Components/Components";
import * as Env from "./environments";
import Parse from "parse";
//  The COMPONENT uses the Parse library to connect to the Parse backend.
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;
//  The Parse.initialize FUNCTION is used to initialize the Parse library.
//  The FUNCTION takes two ARGUEMENTS: the application ID and the JavaScript key
//  The application ID and JavaScript key can be found in the Parse dashboard (back4app).
const App = () => {
  //  The App COMPONENT is a React component that renders the main application.
  //  The COMPONENT renders the 'Components' COMPONENT.
  //  Which is used to render the different pages in the application.
  return <Components />;
};

export default App;
