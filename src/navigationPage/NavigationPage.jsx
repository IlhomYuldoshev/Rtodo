import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../context";

function NavigationPage(props) {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem("auth")
  }

  return (
    <div className="bg-primary">
      <div className="container d-flex flex-column flex-md-row align-items-center pb-3 mb-2 py-2">
        <NavLink to="/" className="d-flex align-items-center text-dark text-decoration-none">
          <span className="fs-4">Webstorm</span>
        </NavLink>
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <NavLink className="me-3 py-2 text-dark text-decoration-none" to="/game">
            Game
          </NavLink>
          <NavLink className="me-3 py-2 text-dark text-decoration-none" to="/posts">
            Posts
          </NavLink>
          {
            isAuth
              ? <NavLink
                className="me-3 py-2 text-decoration-none btn btn-danger text-white fw-bold"
                to="/posts"
                onClick={logOut}>
                Log-Out
              </NavLink>
              : ""
          }
        </nav>
      </div>
    </div>
  );
}

export default NavigationPage;
