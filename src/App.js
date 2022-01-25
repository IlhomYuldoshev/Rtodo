import "./style/styles.css"
import {BrowserRouter as Router} from "react-router-dom";
import RouterApp from "./components/RouterApp";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

export default function App () {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if(localStorage.getItem("auth")){
      setIsAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Router>
        <RouterApp/>
      </Router>
    </AuthContext.Provider>
  )
}
