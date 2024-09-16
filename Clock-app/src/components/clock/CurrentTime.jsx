import React from "react";

export default function CurrentTime() {
  return (
    <div>
      <p>This is the CurrentTime:{new Date().toUTCString()}</p>
    </div>
  );
}
