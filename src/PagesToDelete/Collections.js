import React from "react";
import { useNavigate } from "react-router-dom"; // useHistory for the app
// import Footer from "./Footer/Footer";
// The Collections page HTML goes here
// Will need a component or container for all the images
// and to scroll through them

export default function Collections() {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/");
  };

  return (
    <section>
      <div>
        <h1>Store your Sunset Collections Here</h1>
        <p>It's the Collections page</p>
        <button onClick={buttonHandler}>Home</button>
      </div>
      {/*<Footer />*/}
    </section>
  );
}
