//  This renders the HOME page for the App.
import React from "react";
import styles from "./gallery.module.css";
import SunsetBeachLessTreeImage from "../Images/SunsetBeachLessTree.jpg";
import RenderAuthOptions from "../Components/Auth/RenderAuthOptions";

//  Image props below
const images = [
  SunsetBeachLessTreeImage,
  SunsetBeachLessTreeImage,
  SunsetBeachLessTreeImage,
  SunsetBeachLessTreeImage,
  SunsetBeachLessTreeImage,
  SunsetBeachLessTreeImage,
  SunsetBeachLessTreeImage,
  SunsetBeachLessTreeImage
];

export default function Gallery({ isAuthenticated }) {
  //  The Home COMPONENT takes an isAuthenticated PROP that specifies whether the user is authenticated.
  const PictureGallery = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.galleryTitle}>Photo Gallery</h2>
        <div className={styles.picGallery}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sunset ${index}`}
              className={styles.galleryImage}
            />
          ))}
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
          <h1>The Sunset App</h1>
          <h2>A place to collect all your sunsets</h2>
        </div>
      </div>
      <div className={styles.bottomSection}>
        {!isAuthenticated && <RenderAuthOptions />}
        {/* If the user is not authenticated, the Home component renders the RenderAuthOptions component. 
        The RenderAuthOptions component is a custom component that is used to render the authentication options for unauthenticated users.
        The component renders a link to the login page and a link to the register page.*/}
        {isAuthenticated && <PictureGallery />}
        {/* If the user is authenticated, the Home component renders the HeroGallery component. 
        The HeroGallery component is a custom component that is used to render a gallery of sunset images
        The component renders a list of images that are passed to the component as props. */}
      </div>
    </section>
  );
}
