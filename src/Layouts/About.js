//  This renders the About page for the App.
import React from "react";
import styles from "./About.module.css";
import SunsetBeachLessTreeImage from "../Images/SunsetBeachLessTree.jpg";
import RenderAuthOptions from "../Components/Auth/RenderAuthOptions";

export default function About({ isAuthenticated }) {
  //  The About COMPONENT takes an isAuthenticated PROP that specifies whether the user is authenticated.
  const About = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.aboutTitle}>More About it...</h2>
        <div className={styles.aboutText}>
          <p>
            I created this app after using another "Calming" app became bloated
            with too many choices.
          </p>
          <p>
            I find that sunsets by the beach (or most anywhere out in nature)
            are the most relaxing scenes.
          </p>
          <p>Thank you and I hope you find this app useful.</p>
          <p>-- Tom C</p>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div
        className={styles.heroImage}
        style={{
          backgroundImage: `url(${SunsetBeachLessTreeImage})`
        }}
      >
        <div className={styles.heroTitle}>
          <h1>The About the Sunset App</h1>
          <h2>It's about having a place to collect all your sunsets</h2>
        </div>
      </div>
      <div className={styles.bottomSection}>
        {!isAuthenticated && <RenderAuthOptions />}
        {/* If the user is not authenticated, the Home component renders the RenderAuthOptions component. 
        The RenderAuthOptions component is a custom component that is used to render the authentication options for unauthenticated users.
        The component renders a link to the login page and a link to the register page.*/}
        {isAuthenticated && <About />}
        {/*If the user is authenticated, the Home component renders the HeroGallery component. 
        The HeroGallery component is a custom component that is used to render a gallery of sunset images
        The component renders a list of images that are passed to the component as props. */}
      </div>
    </section>
  );
}
