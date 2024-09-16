import React from "react";

export default function Random() {
  let number = Math.round(Math.random() * 100);
  return (
    <div>
      <h2 style={{ "background-color": "#776691" }}>
        Random numer is:{number}
      </h2>
    </div>
  );
}
