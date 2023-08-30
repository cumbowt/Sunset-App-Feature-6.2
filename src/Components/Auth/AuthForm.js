import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css";
//  Import React library, useNavigate hook, and css styles (from local)
const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  const navigate = useNavigate();
  //  This useNavigate HOOK is used to navigate the user to the home page when the user clicks the home button.
  //  onChange FUNCTION is used to update the state of the component when the user changes a value of an input field.
  //  onSubmit FUNCTION is used to handle the submission of the form.
  //  The AuthForm COMPONENT takes three props: User, isLogin, and onChange.
  //  The user PROP is an OBJECT that contains the user's current information.
  //  The isLogin PROP is a BOOLEAN VALUE that indicates whether the user is logging in or registering.
  //  The onChange PROP is a FUNCTION that is called when the user changes the value of an imput field.
  return (
    <form onSubmit={onSubmit} autoComplete="off" className={styles.authForm}>
      {/*  onSubmit function is responsible for handling the submission of the form. Called when user clicks submit */}
      {!isLogin ? (
        <div className={styles.formGroup}>
          <label htmlFor="first-name-input">First Name</label>
          <input
            type="text"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="Enter your first name"
            required
          />
          <label htmlFor="last-name-input">Last Name</label>
          <input
            type="text"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>
      ) : null}
      <div className={styles.formGroup}>
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          value={user.email}
          onChange={onChange}
          name="email"
          required
        />
        <label htmlFor="password-input">Password</label>
        <input
          type="password"
          id="password-input"
          value={user.password}
          onChange={onChange}
          name="password"
          min="0"
          required
        />
        <button
          type="submit"
          className={styles.submitButton}
          onSubmit={onSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className={styles.returnHomeButton}
          onClick={() => navigate("./Home")}
          //  The onSubmit function the calls the useNavigate HOOK to navigate to the home page
        >
          Return Home
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
