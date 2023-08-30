import React from "react";
import styles from "./RenderAuthOptions.module.css";
import { Link } from "react-router-dom";

const RenderAuthOptions = () => {
  return (
    <div className={styles.authOptions}>
      <Link to="/auth/register">
        <button className={`${styles.authButton} ${styles.registerButton}`}>
          Register
        </button>
      </Link>
      <Link to="/auth/login">
        <button className={`${styles.authButton} ${styles.loginButton}`}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default RenderAuthOptions;
