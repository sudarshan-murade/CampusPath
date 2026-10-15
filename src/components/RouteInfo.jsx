// RouteInfo.jsx
// Shows the result of Dijkstra's algorithm: the route, its total
// distance (animated counting up), and how many nodes were visited.

import { useEffect, useState } from "react";
import { displayNames } from "../data/campusData";

// Counts a number up from 0 to `target` over `duration` milliseconds.
// This is the only place we animate a raw number, so it stays a
// deliberate touch rather than a generic effect applied everywhere.
function useCountUp(target, duration = 650) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!Number.isFinite(target)) {
      setValue(0);
      return;
    }
    let start = null;
    let frameId;

    function tick(timestamp) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return value;
}

export default function RouteInfo({ result }) {
  const { path, totalDistance, steps } = result;
  const animatedDistance = useCountUp(totalDistance);

  if (path.length === 0) {
    return (
      <div className="route-info route-info-empty">
        No path exists between these two locations.
      </div>
    );
  }

  return (
    <div className="route-info">
      <h3>Shortest Route</h3>

      <div className="route-path">
        {path.map((nodeId, index) => (
          <span key={nodeId} className="route-step">
            {displayNames[nodeId]}
            {index < path.length - 1 && <span className="route-arrow">&darr;</span>}
          </span>
        ))}
      </div>

      <div className="route-stats">
        <div>
          <span className="stat-label">Total Distance</span>
          <span className="stat-value">{animatedDistance} m</span>
        </div>
        <div>
          <span className="stat-label">Nodes Visited</span>
          <span className="stat-value">{steps.length}</span>
        </div>
        <div>
          <span className="stat-label">Algorithm</span>
          <span className="stat-value">Dijkstra's</span>
        </div>
      </div>
    </div>
  );
}
