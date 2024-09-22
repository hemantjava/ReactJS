import React from "react";
import FoodItem from "./FoodItem";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";

export default function Fragment() {
  let foodItems = ["Dal", "Green vegetable", "roti", "Shalad", "idlly"];
  return (
    <Container>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItem items={foodItems} />
    </Container>
  );
}
