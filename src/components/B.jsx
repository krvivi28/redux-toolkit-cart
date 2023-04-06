import React, { useContext } from "react";
import { Data } from "../main";
export default function B() {
  const name = useContext(Data);
  return (
    <>
      <h2>{name}</h2>
    </>
  );
}
