import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const validateForm = () => {
    if (!newPlantName.trim()) {
      setError("Plant name is required");
      return false;
    }
    if (!newPlantImage.trim()) {
      setError("Image URL is required");
      return false;
    }
    if (!newPlantPrice || parseFloat(newPlantPrice) <= 0) {
      setError("Please enter a valid price");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setNewPlantName("");
    setNewPlantImage("");
    setNewPlantPrice("");
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const plantObj = {
      name: newPlantName,
      image: newPlantImage,
      price: parseFloat(newPlantPrice),
    };

    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plantObj),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onAddPlant(data);
      resetForm();
    } catch (error) {
      console.error("Error adding plant:", error);
      setError("Failed to add plant. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={(e) => setNewPlantName(e.target.value)}
          value={newPlantName}
          disabled={isSubmitting}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={(e) => setNewPlantImage(e.target.value)}
          value={newPlantImage}
          disabled={isSubmitting}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={(e) => setNewPlantPrice(e.target.value)}
          value={newPlantPrice}
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding Plant..." : "Add Plant"}
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
