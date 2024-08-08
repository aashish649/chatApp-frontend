# ChatApp Frontend

This is the frontend of a chat application built using **React** and **Vite**. The app is designed to be fast, responsive, and smooth, with features like infinite scrolling for chats and modern UI components.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **React + Vite**: Lightning-fast build tool and development server.
- **Redux**: State management with `@reduxjs/toolkit`.
- **MUI**: Modern and customizable UI components using Material-UI.
- **Infinite Scroll**: Smooth and continuous scrolling of chat messages.
- **Real-time Communication**: Implemented using `socket.io-client`.
- **Responsive Design**: Works seamlessly across different devices.
- **Charts**: Visual data representation using `chart.js` and `react-chartjs-2`.
- **Animations**: Fluid animations using `framer-motion`.
- **Date Handling**: Easy date manipulation with `moment`.
- **Notifications**: Toast notifications using `react-hot-toast`.

## Technologies
- **React**: `^18.3.1`
- **Vite**: Fast and lightweight frontend tool.
- **Redux**: `^9.1.2` with `@reduxjs/toolkit` for state management.
- **MUI**: Material UI for styling components.
- **Socket.io**: Real-time bi-directional communication.
- **Framer Motion**: Animations and transitions.
- **Chart.js**: Charts and data visualizations.
- **Moment**: Date and time manipulation.
- **React Router**: `^6.24.1` for navigation.
- **Axios**: `^1.7.3` for API requests.
- **React Helmet Async**: `^2.0.5` for managing document head.
- **React Hot Toast**: `^2.4.1` for notifications.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/chatapp-frontend.git
    cd chatapp-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Usage

- **Login/Signup**: Users can create an account or log in with existing credentials.
- **Chat**: Engage in real-time conversations with other users.
- **Infinite Scrolling**: Seamlessly scroll through chat history.
- **Notifications**: Receive real-time updates and notifications.

## Project Structure

```plaintext
├── public
│   ├── index.html
├── src
│   ├── assets
│   ├── components
│   ├── features
│   ├── hooks
│   ├── pages
│   ├── redux
│   ├── styles
│   ├── utils
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── package.json
└── README.md

