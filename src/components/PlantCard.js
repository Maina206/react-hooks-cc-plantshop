import React, { useState } from "react";

function PlantCard({ plant, id, onDeletePlant }) {
  const { name, image, price } = plant;

  const [isInStock, setIsInStock] = useState(true);
  function handleInStock() {
    setIsInStock((prevIsInStock) => !prevIsInStock);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
    onDeletePlant(id);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleInStock} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
