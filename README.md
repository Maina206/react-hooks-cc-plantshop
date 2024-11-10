# Plantsy 🌱

## Description

Plantsy is a React-based web application for managing a plant shop's inventory. It allows users to view, add, search, and manage plants with a simple and intuitive interface.

## Project Link

Link to the deployed site: https://673080fc33de73ae151c98b1--myplantsyapp.netlify.app/

## Features

- **Plant Management**

  - View all plants in a responsive card layout
  - Add new plants with name, image URL, and price
  - Delete plants from inventory
  - Toggle plant availability status (In Stock/Out of Stock)

- **Search Functionality**
  - Real-time search filtering of plants by name
  - Instant updates as you type

## Project Structure

```
plantsy/
│
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Header.js
│   │   ├── PlantPage.js
│   │   ├── PlantList.js
│   │   ├── PlantCard.js
│   │   ├── NewPlantForm.js
│   │   └── Search.js
│   │
│   ├── index.js
│   └── index.css
│
├── public/
│   └── index.html
│
├── package.json
└── README.md
```

## Component Hierarchy

```
App
├── Header
└── PlantPage
    ├── NewPlantForm
    ├── Search
    └── PlantList
        └── PlantCard
```

## Component Details

- **App**: Root component

  - Renders Header and PlantPage
  - Manages overall layout

- **PlantPage**: Main container component

  - Manages plant data state
  - Handles API calls
  - Controls data flow between components
  - State: plants[], submittedSearch

- **PlantList**: Plant display component

  - Renders filtered plant cards
  - Handles plant filtering based on search
  - Props: plants, submittedSearch, onDeletePlant

- **PlantCard**: Individual plant component

  - Displays plant details
  - Manages stock status
  - Handles deletion
  - State: isInStock
  - Props: plant, id, onDeletePlant

- **NewPlantForm**: Form component

  - Handles plant creation
  - Manages form state
  - State: newPlantName, newPlantImage, newPlantPrice
  - Props: onAddPlant

- **Search**: Search component
  - Manages search functionality
  - State: searchTerm
  - Props: setSubmittedSearch

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Maina206/react-hooks-cc-plantshop
cd plantsy
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Start the backend server:

```bash
json-server --watch db.json --port 6001
```

## Backend Setup

The application requires a JSON server running on port 6001. Your `db.json` should have a `plants` array with objects following this structure:

```json
{
  "plants": [
    {
      "id": 1,
      "name": "Plant Name",
      "image": "image_url",
      "price": "29.99"
    }
  ]
}
```

## API Endpoints

| Endpoint      | Method | Description      |
| ------------- | ------ | ---------------- |
| `/plants`     | GET    | Fetch all plants |
| `/plants`     | POST   | Add a new plant  |
| `/plants/:id` | DELETE | Delete a plant   |

## Usage

1. Start both the frontend and backend servers
2. Browse the existing plant inventory
3. Use the search bar to filter plants by name
4. Add new plants using the form at the top of the page
5. Toggle plant availability using the "In Stock"/"Out of Stock" button
6. Delete plants using the delete button on each card

## Dependencies

- React
- React DOM
- JSON Server (for backend)
- Other dependencies as listed in package.json

## License

This project is licensed under the MIT License
