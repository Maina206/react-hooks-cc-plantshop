import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  function addPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  }
  const [submittedSearch, setSubmittedSearch] = useState("");

  function deletePlant(id) {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);
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
