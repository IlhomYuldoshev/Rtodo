import {useState} from "react";

export default function IncDec () {
  const [num, fnNum] = useState(0)

  const inc = () => {
    fnNum(prev => prev + 1)
  }

  const dec = () => {
    fnNum(prev => prev - 1)
  }

  return (
    <>
      <h3>Count: {num}</h3>
      <div>
        <button onClick={inc} className="btn btn-success">Increase</button>
        <button onClick={dec} className="btn btn-danger">Decrease</button>
      </div>
    </>
  )
}
