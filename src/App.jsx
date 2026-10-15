// App.jsx
// The main page. It holds the app's state (which locations are selected,
// and the result of running Dijkstra's algorithm) and puts every section
// on the page in order.

import { useState } from "react";
import Navbar from "./components/Navbar";
import LocationSelector from "./components/LocationSelector";
import CampusGraph from "./components/CampusGraph";
import RouteInfo from "./components/RouteInfo";
import AlgorithmSteps from "./components/AlgorithmSteps";
import DMConcepts from "./components/DMConcepts";
import { dijkstra } from "./algorithms/dijkstra";
import { campusGraph } from "./data/campusData";

export default function App() {
  const [from, setFrom] = useState("Library");
  const [to, setTo] = useState("ComputerLab");
  const [result, setResult] = useState(null); // { path, totalDistance, steps }
  const [stepIndex, setStepIndex] = useState(0);

  function handleFindPath() {
    if (from === to) {
      alert("Please choose two different locations.");
      return;
    }
    const output = dijkstra(campusGraph, from, to);
    setResult(output);
    setStepIndex(0);
  }

  function handleReset() {
    setResult(null);
    setStepIndex(0);
  }

  return (
    <div className="app">
      <Navbar />

      <header className="hero">
        <p className="hero-eyebrow">Discrete Mathematics course project</p>
        <h1>CampusPath</h1>
        <p className="hero-subtitle">
          The campus, modeled as a weighted graph. Pick two locations and
          watch Dijkstra's algorithm find the shortest way between them.
        </p>
      </header>

      <section id="navigation" className="section navigation-section">
        <div className="panel">
          <LocationSelector
            from={from}
            to={to}
            onFromChange={setFrom}
            onToChange={setTo}
            onFindPath={handleFindPath}
            onReset={handleReset}
          />
          {result && <RouteInfo result={result} />}
        </div>

        <div className="panel graph-panel">
          <h2>Campus Graph</h2>
          <p className="panel-hint">
            Each dot is a vertex. Each line is an edge, labeled with its
            weight in meters.
          </p>
          <CampusGraph path={result ? result.path : []} />
        </div>
      </section>

      {result && (
        <section id="visualizer" className="section">
          <h2>How Dijkstra's Algorithm Worked Here</h2>
          <AlgorithmSteps
            steps={result.steps}
            stepIndex={stepIndex}
            onStepChange={setStepIndex}
          />
        </section>
      )}

      <section id="concepts" className="section">
        <h2>Why This Is a Discrete Mathematics Project</h2>
        <DMConcepts />
      </section>

      <footer className="footer">
        Built for the Discrete Mathematics course &middot; VIT Pune
      </footer>
    </div>
  );
}
