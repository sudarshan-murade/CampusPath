// LocationSelector.jsx
// Lets the user pick a starting location and a destination,
// then triggers Dijkstra's algorithm.

import { displayNames } from "../data/campusData";

export default function LocationSelector({
  from,
  to,
  onFromChange,
  onToChange,
  onFindPath,
  onReset,
}) {
  const locationIds = Object.keys(displayNames);

  return (
    <div className="location-selector">
      <h2>Smart Campus Navigation</h2>
      <p className="panel-hint">
        Choose two locations to find the shortest route between them.
      </p>

      <label className="field">
        <span>From</span>
        <select value={from} onChange={(e) => onFromChange(e.target.value)}>
          {locationIds.map((id) => (
            <option key={id} value={id}>
              {displayNames[id]}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>To</span>
        <select value={to} onChange={(e) => onToChange(e.target.value)}>
          {locationIds.map((id) => (
            <option key={id} value={id}>
              {displayNames[id]}
            </option>
          ))}
        </select>
      </label>

      <div className="button-row">
        <button className="btn btn-primary" onClick={onFindPath}>
          Find Shortest Path
        </button>
        <button className="btn btn-secondary" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
