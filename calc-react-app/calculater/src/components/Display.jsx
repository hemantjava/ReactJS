import React from "react";

export default function Display({ displayVal }) {
  return (
    <div>
      <input type="text" className="display" value={displayVal} />
    </div>
  );
}
