import "../style/styles.css"
import {useState} from "react";

export default function InputValue () {
  const [value, setValue] = useState("Ilhom")

  return (
    <div className="formOwn">
      <div>Value: {value}</div>
      <input
        onChange={e => setValue(e.target.value)}
        type="text"
        value={value}
        className="form-control"/>
    </div>
  )
}
