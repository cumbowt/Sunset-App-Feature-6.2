import React from "react";
import { useNavigate } from "react-router-dom"; // useHistory
// import styles from "./About.module.css";
// The About page HTML goes here

const About = () => {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/");
  };
  return (
    <section>
      <h1>Welcome to the About component</h1>
      <p>This is the About component</p>
      <button onClick={buttonHandler}>SunSet</button>
    </section>
  );
};

export default About;
