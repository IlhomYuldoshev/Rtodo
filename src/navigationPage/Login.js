import React, {useContext} from 'react';
import {AuthContext} from "../context";
import s from "./Login.module.css"
import MyInput from "../components/UI/input/MyInput";

function Login(props) {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem("auth", "login")
  }

  return (
    <>
      <div className={s.formWrapper}>
        <form className="form-control" onSubmit={login}>
          <h2 className="m0 mb-3" style={{textTransform: "uppercase", textAlign: "center"}}>Admin panel</h2>
          <div className={s.inputWrapper}>
            <MyInput
              className="form-control"
              name="email"
              type="email"
              placeholder="Enter your login"
              required/>
          </div>
          <div className={s.inputWrapper}>
            <MyInput
              className="form-control"
              name="password"
              type="password"
              placeholder="Enter your password"
              required/>
          </div>
          <button type="submit" className="btn btn-success">submit</button>
        </form>
      </div>
    </>
);
}

export default Login;
