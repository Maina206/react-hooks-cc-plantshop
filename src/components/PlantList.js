import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant, submittedSearch, onDeletePlant }) {
  return (
    <ul className="cards">
      {plants
        .filter((plant) => {
          return plant.name
            .toLowerCase()
            .includes(submittedSearch.toLowerCase());
        })

        .map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            id={plant.id}
            onUpdatePlant={onUpdatePlant}
            onDeletePlant={onDeletePlant}
          />
        ))}
    </ul>
  );
}

export default PlantList;
