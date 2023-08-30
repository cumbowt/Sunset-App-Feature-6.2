import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const AuthLogin = ({ onLogin }) => {
  const navigate = useNavigate();

  // This will redirect the already authenticated users back to the home page
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          alert(
            `${userLoggedIn.get("firstName")}, you successfully logged in!`
          );
          navigate("/");
          // call onLogin prop function after successful login
          onLogin();
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add, onLogin]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div>
      <span className="homeImage">
        {/* <img src="../src/Images/SunsetBeachLessTree.jpg" alt="Sunset Beach" /> */}
        <h1>The Sunset App</h1>
        <h2>A place to collect all your sunsets</h2>
        <br />
        <div className="flex-container">
          <br />
          <br />
          <div>
            <AuthForm
              user={currentUser}
              isLogin={true}
              onChange={onChangeHandler}
              onSubmit={onSubmitHandler}
            />
          </div>
        </div>
      </span>
    </div>
  );
};

export default AuthLogin;
