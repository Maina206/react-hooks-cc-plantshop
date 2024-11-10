import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:6001/plants");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlants(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch plants. Please try again later.");
        console.error("Error fetching plants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlants();
  }, []);

  const addPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  };

  const deletePlant = async (id) => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedPlants = plants.filter((plant) => plant.id !== id);
      setPlants(updatedPlants);
    } catch (error) {
      console.error("Error deleting plant:", error);
      alert("Failed to delete plant. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading plants...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error: {error}</h2>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search setSubmittedSearch={setSubmittedSearch} />
      <PlantList
        plants={plants}
        submittedSearch={submittedSearch}
        onDeletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
