import React from "react";

export default function ErrorMessage({ items }) {
  //props destructuring
  return <>{items.length === 0 && <h3>I am still hungry</h3>}</>;
}
