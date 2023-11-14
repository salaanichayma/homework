# Project Name

This project is a React-based web application that allows users to input locations, view them on a map, and search for specific places using a search bar with a dropdown feature.


## Description

The project consists of several React components:

- `DataPage`: Integrates the Header, Sidebar, Footer, LocationComponent, and MapDisplay components to display a user interface for map-related functionalities.
- `MapDisplay`: Renders a Leaflet map with a TileLayer and a default marker at a specified center.
- `LocationComponent`: Provides a form with a search bar to input locations and displays the results in a dropdown.
- `SearchBarWithDropdown`: Implements a search input with a dropdown feature for location search and selection.

## Project Structure

- `components/`: Contains various React components used in the project.
- `services/`: Includes services for fetching location data (`getLocations`).
- `styles/`: Holds CSS files for styling components.

## Proxy Configuration

The project utilizes a proxy setup to handle API requests during development using the `http-proxy-middleware` package. This configuration allows requests made to `/MS_EFA` to be proxied to `https://shop-test.vrr-db-ticketshop.de/MS_EFA`.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   $ git clone https://github.com/username/project.git
   $ cd project

2. Install dependencies: npm install
3. Start the development server: npm start


  