import React from "react"
//import { Input, Button } from "./Form";

const InputForm = ({ inputVal, onChange, onSubmit, buttonText }) => {
  return (
    <div>
      <input value={inputVal} onChange={onChange} />
      <button onClick={onSubmit}>{buttonText || "Search"}</button>
    </div>
  )
}

export default InputForm
