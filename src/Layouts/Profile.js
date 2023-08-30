//import { useNavigate } from "react-router-dom"; // useHistory for the app
import React from "react";
import styles from "./Profile.module.css";
import SunsetBeachLessTreeImage from "../Images/SunsetBeachLessTree.jpg";
import profileSunset from "../Images/profileSunset.jpg";
import RenderAuthOptions from "../Components/Auth/RenderAuthOptions";

// The Profile page HTML goes here

const images = [profileSunset];

export default function Profile({ isAuthenticated }) {
  //  The Home COMPONENT takes an isAuthenticated PROP that specifies whether the user is authenticated.
  const Profile = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.profileTitle}>Thomas Cumbow</h2>
        <div className={styles.profileGallery}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sunset ${index}`}
              className={styles.profileImage}
            />
          ))}
          <p className={styles.profileText}>
            Welcome to my profile page. <br />
            My family and I like to relax by the beach, obviously. :) <br />
            We prefer to get there around dinner time, when most folks are
            leaving for dinner. <br />
            We usually bring our own dinner and eat at the beach. <br />
            Most of the beaches we visit are in Michigan, along the Red Arrow
            highway <br />
            Very often we stay for the sunsets when we can!
          </p>
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
          <h1>My Profile Page</h1>
          <h2>For the love of sunsets...</h2>
        </div>
      </div>
      <div className={styles.bottomSection}>
        {!isAuthenticated && <RenderAuthOptions />}
        {/* If the user is not authenticated, the Home component renders the RenderAuthOptions component. 
        The RenderAuthOptions component is a custom component that is used to render the authentication options for unauthenticated users.
        The component renders a link to the login page and a link to the register page.*/}
        {isAuthenticated && <Profile />}
        {/*If the user is authenticated, the Home component renders the HeroGallery component. 
        The HeroGallery component is a custom component that is used to render a gallery of sunset images
        The component renders a list of images that are passed to the component as props. */}
      </div>
    </section>
  );
}
