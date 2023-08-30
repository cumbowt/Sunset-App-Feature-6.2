//This code should create a simple image gallery
//that should display a list of photos fetched from a remote API.
//I hope to customize the image gallery by passing different props
//to the ImageGallery component.
//react-image-gallery: https://www.npmjs.com/package/react-image-gallery documentation.

import React, { useEffect } from "react";
//import ImageGallery from "react-image-gallery";
//import Parse from "parse";

const App = () => {
  const [photos, setPhotos] = React.useState([]);

  const fetchPhotos = async () => {
    const response = await fetch("https://api.example.com/photos");
    const data = await response.json();
    setPhotos(data);
  };
  /*const file = new Parse.File("myfile.zzz", fileData, "image/png");};

  const fileUploadControl = $("#profilePhotoFileUpload")[0];
  if (fileUploadControl.files.length > 0) {
    const file = fileUploadControl.files[0];
    const name = "photo.jpg";
  
    const parseFile = new Parse.File(name, file);
  };*/

  useEffect(() => {
    fetchPhotos();
    //fileUploadControl();
  }, []);

  return (
    <div>
      <ImageGallery photos={photos} />
    </div>
  );
};

export default App;
