import React from "react";
import "../App.css";
import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);

  function handleCilck() {
    setValue("X");
  }

  return (
    <>
      <button className="square" onClick={handleCilck}>
        {value}
      </button>
    </>
  );
}
