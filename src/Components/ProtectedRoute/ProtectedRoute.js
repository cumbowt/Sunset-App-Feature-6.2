import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";
import styles from "./ProtectedRoute.module.css";
//  The component first imports the React library.
//  The useNavigate HOOK from react-router-dom.
//  The checkUser FUNCTION from the AuthService file.
//  Also imports the styles file.

//  This COMPONENT then defines a FUNCTION, ProtectedRoute, that takes a single PROP, component.
//  That PROP, component, will be the COMPONENT that will be rendered if the user is authorized.
const ProtectedRoute = ({ component }) => {
  //  The FUNCTION first uses the useNavigate HOOK to get a reference to the navigate FUNCTION.
  const navigate = useNavigate();
  //  It then defines a FUNCTION, goBackHandler, that uses the navigate FUNCTION to navigate
  //  back to the /auth route.
  const goBackHandler = () => {
    navigate("/auth");
  };
  //  The ProtectedRoute FUNCTION then checks if the user is authorized by calling the checkUser FUNCTION.
  if (!checkUser()) {
    //  If the user is not authorized, the FUNCTION returns a DIV ELEMENT with the unauthorized class.
    //  Displays unauthorized and a button that calls the goBackHandler FUNCTION to return home.
    return (
      <div className={styles.unauthorized}>
        <div className={styles.fourZeroFour}>404</div>
        <h1>UNAUTHORIZED</h1>
        <button className={styles.authButton} onClick={goBackHandler}>
          Go Back
        </button>
      </div>
    );
  }

  if (!component) {
    return (
      <div className={styles.unauthorized}>
        <div className={styles.fourZeroFour}>200</div>
        <h1>PAGE NOT YET DEVELOPED</h1>
        <button className={styles.authButton} onClick={goBackHandler}>
          Go Back
        </button>
      </div>
    );
  }
  //  If the user is authorized, the ProtectedRoute FUNCTION returns the component PROP.
  return component;
};

export default ProtectedRoute;
