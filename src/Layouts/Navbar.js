import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../Images/SunsetAppLogo.png";
import { handleLogout } from "../Components/Auth/AuthLogout";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout(onLogout);
    navigate("/auth");
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLeft}>
        <NavLink
          exact
          to={isAuthenticated ? "/" : "/auth"}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
        <NavLink to="/Gallery" activeClassName={styles.activeLink}>
          Gallery
        </NavLink>
        <NavLink to="/Upload" activeClassName={styles.activeLink}>
          Upload
        </NavLink>
      </div>

      <div className={styles.navCenter}>
        <NavLink to={isAuthenticated ? "/" : "/auth"}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </NavLink>
      </div>

      <div className={styles.navRight}>
        <NavLink to="/Profile" activeClassName={styles.activeLink}>
          Profile
        </NavLink>

        <NavLink to="/About" activeClassName={styles.activeLink}>
          About
        </NavLink>

        {isAuthenticated ? (
          <a href onClick={handleLogoutClick} className={styles.logoutButton}>
            Log Out
          </a>
        ) : (
          <NavLink to="/auth/login" className={styles.logoutButton}>
            Log In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
