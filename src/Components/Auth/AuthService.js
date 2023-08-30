import Parse from "parse";
//  a set of FUNCTIONS that use the Parse SDK to create, login, and logout users.
//  This is used in the AuthRegister component
//  The createUser FUNCTION creates a new user OBJECT and sets the user's username, first name, last name, password, and email address.
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return (
    user
      //  It then calls the signUp() METHOD on the user OBJECT to save the user to the Parse database
      .signUp()
      .then((newUserSaved) => {
        return newUserSaved;
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      })
  );
};

//  Used in auth login component
//  The loginUser FUNCTION sets the user's password and username and then calls the logIn() METHOD
//  on the user OBJECT to log the user in.
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  //  The FUNCTION returns the user OBJECT if the login is successful.
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

//  Log user out of session
//  The logoutUser FUNCTION calls the logOut() METHOD on the Parse SDK to log the user out of the session.
export const logoutUser = () => {
  return Parse.User.logOut()
    .then(() => {
      console.log("User logged out successfully");
    })
    .catch((error) => {
      console.error(
        `An error occurred while logging out user: ${error.message}`
      );
    });
};
//  The checkUser FUNCTION checks whether the current user is authenticated.
//  The FUNCTION returns TRUE if the user is authenticated and FALSE otherwise.
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};
