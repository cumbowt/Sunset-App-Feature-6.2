//  This will render the Main Application.
//  It uses the react router to route users to different pages depending on their auth status.
import React, { useState, useEffect } from "react";
//  Import the React HOOKS used to manage state and effects.
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
//  Import the Custom React Router COMPONENT.
import {
  BrowserRouter as Router, //  React router component to create a browser router.
  Navigate, //  RR COMPONENT used to navigate different routes.
  Routes, //  RR COMPONENT use to define the multiple routes.
  Route //  RR COMPONENT used to define a single route.
} from "react-router-dom";

import AuthModule from "./Auth/Auth.js";
//  import the custom COMPONENT Auth to handle authentication.
import AuthRegister from "./Auth/AuthRegister";
//  import the custom COMPONENT AuthRegister to register a new user.
import AuthLogin from "./Auth/AuthLogin";
//  import the custom COMPONENT AuthLogin to login a user.
import Home from "../Layouts/Home";
//  import the custom COMPONENT Home to render the home page.
import About from "../Layouts/About";
//  import the custom COMPONENT About to render the home page.
import Profile from "../Layouts/Profile";
//  import the custom COMPONENT Profile to render the home page.
import GalleryPage from "../Layouts/GalleryPage";
//  import the custom COMPONENT Gallery to render the home page.
//import Upload from "./ImageGallery/Upload";
//  import the custom COMPONENT Upload to render the home page.
import Navbar from "../Layouts/Navbar";
//  import the custom COMPONENT Navbar to render the Navbar on the pages.
import { checkUser } from "./Auth/AuthService";
//  import the FUNCTION that is used to check if the user is authenticated.

const Components = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //  This component uses the useState hook to track the user's auth status.
  //  The useState hook returns an array with two values: the current value of the state and
  //  a function "(false)" that can be used to update the state.

  useEffect(() => {
    //  HOOK to check the user's auth status when the component is mounted.
    //  If user is already auth'd, useEffect HOOK sests the IsAuthenticated to (true).
    if (checkUser()) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    //  FUNCTION is used to handle the login of the user.
    //  It sets the isAuthenticated state to (true).
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    //  FUNCTION is used to handle the logout of the user.
    //  It sets the isAuthenticated state to (false).
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* Defines the routes in the app. 
      It takes an ARRAY of Route COMPONENTS as it's children.
      Each Route COMPONENT defines a path and a component (i.e. /auth) that is rendered
      when it's path is matched/called */}
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/auth"
          element={
            <AuthModule
              component={<Home isAuthenticated={isAuthenticated} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route
          path="/auth/login"
          element={<AuthLogin onLogin={handleLogin} />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute
              component={<Home isAuthenticated={isAuthenticated} />}
              isAuthenticated={isAuthenticated}
            />
            /* The ProtectedRoute COMPONENT is a custom React Router component that is used to protect routes. 
            This COMPONENT takes the isAuthenticated prop is a custom React Router component that is used to 
            protect routes.*/
          }
        />
        <Route
          path="/gallery"
          element={<GalleryPage isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/upload"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/about"
          element={<About isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/profile"
          element={<Profile isAuthenticated={isAuthenticated} />}
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;
