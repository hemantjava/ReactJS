import React from "react";
import PropTypes from "prop-types";

export default function ButtonComp({ onButtonClick }) {
  const buts = [
    "Clr",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "%",
    ".",
    "=",
  ];
  return (
    <div>
      <div className="btnCtn">
        {buts.map((bt) => (
          <button key={bt} className="btnHK" onClick={() => onButtonClick(bt)}>
            {bt}
          </button>
        ))}
      </div>
    </div>
  );
}
ButtonComp.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
