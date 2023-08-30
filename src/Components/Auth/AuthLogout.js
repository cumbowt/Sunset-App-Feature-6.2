import { checkUser, logoutUser } from "./AuthService";

export const handleLogout = (onLogout) => {
  if (checkUser()) {
    logoutUser();
    onLogout();
  }
};
