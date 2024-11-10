import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const plantObj = {
      name: newPlantName,
      image: newPlantImage,
      price: newPlantPrice,
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(plantObj),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddPlant(data);

        setNewPlantName("");
        setNewPlantImage("");
        setNewPlantPrice("");
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={(e) => setNewPlantName(e.target.value)}
          value={newPlantName}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={(e) => setNewPlantImage(e.target.value)}
          value={newPlantImage}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={(e) => setNewPlantPrice(e.target.value)}
          value={newPlantPrice}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}
export default NewPlantForm;
