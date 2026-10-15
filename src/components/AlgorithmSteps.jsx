// AlgorithmSteps.jsx
// Lets the user step through exactly what Dijkstra's algorithm did,
// one iteration at a time - useful for explaining it during a viva.

import { displayNames } from "../data/campusData";

export default function AlgorithmSteps({ steps, stepIndex, onStepChange }) {
  const step = steps[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === steps.length - 1;

  return (
    <div className="algorithm-steps">
      <div className="step-header">
        <span className="step-count">
          Step {stepIndex + 1} of {steps.length}
        </span>
        <div className="step-buttons">
          <button
            className="btn btn-secondary"
            disabled={isFirst}
            onClick={() => onStepChange(stepIndex - 1)}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            disabled={isLast}
            onClick={() => onStepChange(stepIndex + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <p className="step-description" key={stepIndex}>
        {step.description}
      </p>

      <table className="distance-table" key={`table-${stepIndex}`}>
        <thead>
          <tr>
            <th>Location</th>
            <th>Current Known Distance</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(step.distances).map(([nodeId, distance]) => (
            <tr key={nodeId} className={nodeId === step.current ? "active-row" : ""}>
              <td>{displayNames[nodeId]}</td>
              <td>{distance === Infinity ? "Infinity" : `${distance} m`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
