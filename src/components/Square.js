import React from "react";
import "../App.css";

export default function Square({value}) {
  return (
    <>
      <button className="square">{value}</button>
    </>
  );
}
