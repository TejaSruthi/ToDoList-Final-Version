import React, { useState } from "react";

function InputArea(props) {
  const [val, setVal] = useState("");

  function valueAdded(event) {
    const { value } = event.target;
    setVal(value);
  }
  return (
    <div className="form">
      <input onChange={valueAdded} type="text" value={val} />
      <button
        onClick={() => {
          props.onAdd(val);
          setVal("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
