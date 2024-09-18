# Rick & Morty API - Housy Host Test

## Description

The HH Rick and Morty Frontend is the web application built to interact with the backend API that manages characters from the popular Rick and Morty series. This application allows users to view, search, and manage character data with a sleek interface built using React and Material-UI. Users can import character data from the backend, synchronize updates manually, and enjoy a seamless experience through paginated tables and intuitive interactions.

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for type safety
- **Material-UI**: React components for faster and easier web development
- **Axios**: Promise-based HTTP client for making API requests
- **React Toastify**: For displaying notifications
- **Vite**: Frontend build tool for fast development
- **NestJS (Backend)**: Backend framework connected via REST API

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

Clone the repository using either HTTPS or SSH:

**HTTP option**

```bash
$ git clone https://github.com/SamuelSml8/hh_rickmorty_frontend.git
```

**SSH option**

```bash
$ git clone git@github.com:SamuelSml8/hh_rickmorty_frontend.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
$ cd hh_rickmorty_frontend
$ npm install
```

### 4. Running the app

Run the application using the following command:

```bash
# watch mode
$ npm start

# development
$ npm run dev
```

- The application will start and be accessible at http://localhost:5173

## Features

- **Character Import**: Fetch and import 200 characters from the Rick and Morty API into the backend.
- **Real-Time Data Synchronization**: Manually trigger a data refresh to update characters in the database.
- **Character Search and Filter**: Search characters by name with pagination for easy browsing.
- **Interactive Table**: Paginated table with columns for name, status, species, gender, and more, using Material-UI DataGrid.
- **Error Handling and Loading Indicators**: Smooth user experience with notifications and spinners.

## Styling and UI

- **Responsive Design**: Built with Material-UI components for a responsive, modern look.
- **Custom Theme**: Tailored theme with custom colors and typography, matching the Rick and Morty theme.

## Stay in Touch

- **Author**: [Samuel Vera Miranda](https://www.linkedin.com/in/samuelsml)

## License

This project is [MIT licensed](LICENSE).
