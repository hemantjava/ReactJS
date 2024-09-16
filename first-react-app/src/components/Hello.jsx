import React from "react";

export default function Hello() {
  let myName = "Hemant";
  const fullName = () => myName + " Sahu";
  return <div>Hello this is {fullName()}</div>;
}
