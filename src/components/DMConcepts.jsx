// DMConcepts.jsx
// Explains the Discrete Mathematics concepts this project demonstrates.
// This is what ties the working app back to the course syllabus.

const concepts = [
  {
    title: "Graph",
    body: "A graph G = (V, E) is a set of vertices connected by edges. The whole campus map is one graph.",
  },
  {
    title: "Vertex",
    body: "Each campus location - Library, Canteen, Admin Building, and so on - is represented as a vertex.",
  },
  {
    title: "Edge",
    body: "A direct path between two campus locations is represented as an edge connecting their vertices.",
  },
  {
    title: "Weighted Graph",
    body: "Every edge carries a weight: the real-world distance, in meters, between the two locations it connects.",
  },
  {
    title: "Path",
    body: "A path is a sequence of vertices connected by edges, such as Library to Canteen to IT Department.",
  },
  {
    title: "Shortest Path",
    body: "Among all possible paths between two vertices, the shortest path is the one with the smallest total edge weight.",
  },
  {
    title: "Dijkstra's Algorithm",
    body: "A greedy algorithm that finds the shortest path from a start vertex to every other vertex in a weighted graph.",
  },
];

export default function DMConcepts() {
  return (
    <div className="concept-grid">
      {concepts.map((concept) => (
        <div key={concept.title} className="concept-card">
          <h3>{concept.title}</h3>
          <p>{concept.body}</p>
        </div>
      ))}
    </div>
  );
}
