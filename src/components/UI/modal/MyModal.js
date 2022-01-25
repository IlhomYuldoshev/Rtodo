import React from 'react';
import s from "./MyModal.module.css"

const MyModal = ({visible, setVisible, ...props}) => {
  const modalClasses = [s.modal]

  if(visible) {
    modalClasses.push(s.active)
  }

  return (
    <div
      onClick={() => setVisible(!visible)}
      className={modalClasses.join(" ")}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={s.modalContent}>
        {props.children}
      </div>
    </div>
  );
};

export default MyModal;
