import React from 'react';
import s from "./MyLoader.module.css"

const MyLoader = () => {
  return (
    <div className={s.bodyLoader}>
      <div className={s.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MyLoader;
