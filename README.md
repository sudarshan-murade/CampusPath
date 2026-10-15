# CampusPath — Smart Campus Navigation & Shortest Path Optimization

A Discrete Mathematics course project (VIT Pune) that models a college campus
as a **weighted graph** and uses a hand-written implementation of **Dijkstra's
Shortest Path Algorithm** to find the shortest route between two locations.

## Theory → Implementation

```
Real world:            College campus
                              ↓
Mathematical model:    Weighted graph G = (V, E)
                              ↓
Graph components:      Vertices + Edges + Weights
                              ↓
Problem:                Find the shortest path
                              ↓
Algorithm:               Dijkstra's Algorithm
                              ↓
Implementation:          JavaScript + React
                              ↓
Result:                  Shortest campus route
```

## Tech Stack

- React.js + Vite
- Cytoscape.js (graph drawing only — the algorithm itself is hand-written)
- Plain JavaScript objects for the graph data

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Project Structure

```
src/
├── data/campusData.js       # The graph: vertices, edges, weights
├── algorithms/dijkstra.js   # Manual Dijkstra implementation
├── components/
│   ├── Navbar.jsx
│   ├── LocationSelector.jsx # From / To dropdowns + buttons
│   ├── CampusGraph.jsx      # Cytoscape.js visualization + highlighting
│   ├── RouteInfo.jsx        # Shortest route result card
│   ├── AlgorithmSteps.jsx   # Step-by-step algorithm playback
│   └── DMConcepts.jsx       # Graph theory concept explanations
├── App.jsx                  # Page layout and state
└── index.css                # All styling
```

## Discrete Mathematics Concepts Demonstrated

- Graph, Vertices, Edges
- Weighted Graph
- Path, Shortest Path
- Dijkstra's Algorithm
- Real-world application of graph theory

## Editing the Campus Map

Add or change locations and distances in `src/data/campusData.js`. Each
location needs an entry in `campusGraph` (its connections and distances),
`campusPositions` (where to draw it), and `displayNames` (its label).
