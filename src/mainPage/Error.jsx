import React from 'react';
import s from "./Error.module.css"
import {Link} from "react-router-dom";

function Error(props) {
  return (
    <div className={s.errWrapper}>
      <div style={{textAlign: "center"}}>
        <h1 className={s.error}>Error 404</h1>
        <Link to="/posts">Click to return main page</Link>
      </div>
    </div>
  );
}

export default Error;
