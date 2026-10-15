// campusData.js
//
// This file is our mathematical model of the campus.
// It represents the campus as a WEIGHTED GRAPH: G = (V, E)
//
// - Each key (e.g. "Library") is a VERTEX (a campus location).
// - Each inner object lists the VERTICES it connects to (its EDGES).
// - Each number is the WEIGHT of that edge (distance in meters).
//
// Example: campusGraph.Library.Canteen === 100
// means there is an edge between Library and Canteen with weight 100.

export const campusGraph = {
  Library: { Canteen: 100, Admin: 150 },
  Canteen: { Library: 100, ITDepartment: 80, Parking: 130 },
  Admin: { Library: 150, ITDepartment: 120, Auditorium: 90 },
  ITDepartment: { Canteen: 80, Admin: 120, ComputerLab: 50 },
  ComputerLab: { ITDepartment: 50, Auditorium: 60 },
  Auditorium: { Admin: 90, ComputerLab: 60, Parking: 70 },
  Parking: { Canteen: 130, Auditorium: 70 },
};

// These x/y coordinates are ONLY used to draw the graph on screen.
// They are not part of the mathematical model itself - Dijkstra's
// algorithm never looks at position, only at the weights above.
export const campusPositions = {
  Library: { x: 80, y: 60 },
  Canteen: { x: 320, y: 40 },
  Admin: { x: 80, y: 300 },
  ITDepartment: { x: 340, y: 210 },
  ComputerLab: { x: 560, y: 130 },
  Auditorium: { x: 360, y: 380 },
  Parking: { x: 580, y: 380 },
};

// The graph keys have no spaces (so they're valid JS identifiers).
// This map gives each one a friendly label for the UI.
export const displayNames = {
  Library: "Library",
  Canteen: "Canteen",
  Admin: "Admin Building",
  ITDepartment: "IT Department",
  ComputerLab: "Computer Lab",
  Auditorium: "Auditorium",
  Parking: "Parking",
};

// Used to pick which icon each vertex is drawn with on the graph.
export const locationTypes = {
  Library: "library",
  Canteen: "canteen",
  Admin: "admin",
  ITDepartment: "it",
  ComputerLab: "lab",
  Auditorium: "auditorium",
  Parking: "parking",
};
