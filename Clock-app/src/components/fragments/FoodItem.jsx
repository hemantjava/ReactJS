import React from "react";
import Item from "./Item";

export default function FoodItem({ items }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
}
