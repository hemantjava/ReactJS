import React from "react";
import FoodItem from "./FoodItem";
import ErrorMessage from "./ErrorMessage";

export default function Fragment() {
  let foodItems = ["Dal", "Green vegetable", "roti", "Shalad", "idlly"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItem items={foodItems} />
    </>
  );
}
