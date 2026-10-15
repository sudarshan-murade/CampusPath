# CampusPath 🗺️

**A Campus Shortest-Path Visualizer Using Graph Theory and Dijkstra's Algorithm**

CampusPath is a web application developed as a Discrete Mathematics course project. It helps users find the shortest path between campus locations using graph theory and Dijkstra's shortest-path algorithm.

The application represents campus locations as vertices and the connections between them as weighted edges. Users can select locations, visualize the recommended route, and understand how the algorithm finds the shortest path through step-by-step explanations.

## ✨ Features

- **Shortest Path Finder:** Find the shortest route between selected campus locations.
- **Dijkstra's Algorithm:** Implements the shortest-path algorithm to calculate optimal routes.
- **Campus Graph Visualization:** View campus locations and their connections.
- **Step-by-Step Algorithm:** Explore the algorithm's execution through previous and next controls.
- **Route Information:** View route distance and information about the search process.
- **Discrete Mathematics Concepts:** Learn how graph theory and shortest-path algorithms work.
- **Interactive Interface:** Navigate campus locations through a user-friendly web interface.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Programming Language:** JavaScript
- **Styling:** CSS
- **Core Concepts:** Graph Theory, Weighted Graphs, Dijkstra's Algorithm, Shortest-Path Problems

## 🧠 Discrete Mathematics Concepts

This project demonstrates the practical application of the following concepts:

- **Graph Theory:** Representing campus locations and paths as a graph.
- **Vertices and Edges:** Locations are represented as vertices, while connections are represented as edges.
- **Weighted Graphs:** Connections have weights representing distance or travel cost.
- **Dijkstra's Algorithm:** Finds the shortest path from a starting vertex to a destination in a graph with non-negative edge weights.
- **Algorithm Analysis:** Understanding how an algorithm explores vertices and determines the shortest route.

## 📂 Project Structure

```text
CampusPath/
├── public/
├── src/
│   ├── algorithms/
│   │   └── dijkstra.js
│   ├── components/
│   │   ├── AlgorithmSteps.jsx
│   │   ├── CampusGraph.jsx
│   │   ├── DMConcepts.jsx
│   │   ├── LocationSelector.jsx
│   │   ├── Navbar.jsx
│   │   └── RouteInfo.jsx
│   ├── data/
│   │   ├── campusData.js
│   │   └── icons.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🚀 Getting Started

Follow these steps to run CampusPath on your local machine.

### Prerequisites

- Node.js and npm installed
- Git installed

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/sudarshan-murade/CampusPath.git
```

**2. Navigate to the project directory**

```bash
cd CampusPath
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local URL**

Open the URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 🎯 Project Objective

The objective of CampusPath is to connect theoretical concepts from Discrete Mathematics with a practical software application. It demonstrates how graph representations and shortest-path algorithms can solve
