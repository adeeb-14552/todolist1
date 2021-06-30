import React, { useState } from "react";

const Inputsection = (props) => {
  //console.log("all props", props);
  //const [InputValue, setInputValue] = useState("");

  const [inputvalue, setInputValue] = useState("");

  const getValueFromField = (e) => {
    setInputValue(e.target.value);
  };

  const submitToMainList = () => {
    props.dataUpdate(inputvalue);
  };

  return (
    <div style={{ backgroundColor: "yellow", padding: 8, margin: 2 }}>
      <input
        type="text"
        name="listInput"
        placeholder="Enter Item"
        onChange={(e) => getValueFromField(e)}
        style={{ height: 30, width: "100%" }}
      />
      <button
        onClick={() => submitToMainList()}
        style={{ width: "20%", height: 35, cornerRadius: 10, marginTop: 5 }}
      >
        Add
      </button>
    </div>
  );
};
export default Inputsection;
