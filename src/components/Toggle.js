import {useState} from "react";

export default function ToggleBtn (props) {
  const [toggleBtn, setToggleBtn] = useState(false)

  const changeBtnToggle = () => {
    setToggleBtn(prev => prev ? false : true)
  }

  return (
    <>
      <button onClick={changeBtnToggle} className="btn btn-secondary">Toggle</button>
      {toggleBtn ? <p>{props.text || "default text"}</p> : null}
    </>
  )
}
