import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/Route";
import Error from "../mainPage/Error";
import {AuthContext} from "../context";
import Login from "../navigationPage/Login";

function RouterApp(props) {
  const {isAuth} = useContext(AuthContext)

  return (
    isAuth
      ? <Routes>
        {
          privateRoutes.map(route => (
            <Route path={route.path} element={route.element} key={route.path}/>
          ))
        }

        {/*  yulduzcha redirectni vazifasini bajaradi*/}
        <Route path="/*" element={<Error/>}/>
      </Routes>
      : <Routes>
        {
          publicRoutes.map(route => (
            <Route path={route.path} element={route.element} key={route.path}/>
          ))
        }
        <Route path="/*" element={<Login/>}/>
      </Routes>
  );
}

export default RouterApp;
