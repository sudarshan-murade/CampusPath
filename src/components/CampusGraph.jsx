// CampusGraph.jsx
// Draws the campus as an interactive graph using Cytoscape.js.
// Vertices = campus locations, drawn with an icon for their real-world
// type (library, canteen, etc). Edges = paths, labeled with their weight.
// When a shortest path is found, it lights up and animates like a
// glowing route being traced across a map.

import { useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import {
  campusGraph,
  campusPositions,
  displayNames,
  locationTypes,
} from "../data/campusData";
import { getLocationIcon } from "../data/icons";

// Turn our campusGraph object into the {nodes, edges} format Cytoscape expects.
function buildElements() {
  const nodes = Object.keys(campusGraph).map((id) => ({
    data: { id, label: displayNames[id], icon: getLocationIcon(locationTypes[id]) },
    position: campusPositions[id],
  }));

  // Each connection appears twice in campusGraph (A->B and B->A).
  // We only want to draw it once, so we track edges we've already added.
  const seenEdges = new Set();
  const edges = [];

  for (const from in campusGraph) {
    for (const to in campusGraph[from]) {
      const edgeId = [from, to].sort().join("-");
      if (seenEdges.has(edgeId)) continue;
      seenEdges.add(edgeId);
      edges.push({
        data: { id: edgeId, source: from, target: to, weight: campusGraph[from][to] },
      });
    }
  }

  return [...nodes, ...edges];
}

export default function CampusGraph({ path }) {
  const containerRef = useRef(null);
  const cyRef = useRef(null);
  const flowTimerRef = useRef(null);

  // Build the graph once when the component first mounts.
  useEffect(() => {
    const cy = cytoscape({
      container: containerRef.current,
      elements: buildElements(),
      layout: { name: "preset" },
      userZoomingEnabled: false,
      userPanningEnabled: false,
      boxSelectionEnabled: false,
      autoungrabify: true,
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#dff9f2",
            "background-image": "data(icon)",
            "background-fit": "contain",
            "background-clip": "none",
            "background-width": "62%",
            "background-height": "62%",
            width: 52,
            height: 52,
            shape: "ellipse",
            "border-width": 3,
            "border-color": "#5eead4",
            label: "data(label)",
            color: "#e8ecf5",
            "font-family": "Space Grotesk, sans-serif",
            "font-weight": 600,
            "font-size": 12,
            "text-valign": "bottom",
            "text-margin-y": 10,
            "overlay-opacity": 0,
            "transition-property": "border-color, background-color, overlay-opacity",
            "transition-duration": "300ms",
          },
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#2a3352",
            "curve-style": "bezier",
            label: "data(weight)",
            "font-family": "IBM Plex Mono, monospace",
            "font-size": 10,
            color: "#8b95b5",
            "text-background-color": "#0f1424",
            "text-background-opacity": 1,
            "text-background-padding": 3,
          },
        },
        {
          selector: ".path-node",
          style: {
            "border-color": "#f5a623",
            "background-color": "#fff4e0",
            "overlay-color": "#f5a623",
            "overlay-opacity": 0.22,
            "overlay-padding": 10,
          },
        },
        {
          selector: ".path-edge",
          style: {
            "line-color": "#f5a623",
            width: 5,
            "line-style": "dashed",
            "line-dash-pattern": [8, 6],
          },
        },
        {
          selector: ".endpoint-node",
          style: {
            "border-width": 4,
            width: 60,
            height: 60,
          },
        },
      ],
    });

    cyRef.current = cy;
    return () => {
      cy.destroy();
      clearInterval(flowTimerRef.current);
    };
  }, []);

  // Whenever the shortest path changes, highlight it and start the
  // "flowing dashes" animation that makes the route look alive.
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;

    clearInterval(flowTimerRef.current);
    cy.elements().removeClass("path-node path-edge endpoint-node");

    if (!path || path.length === 0) return;

    path.forEach((nodeId, index) => {
      const node = cy.getElementById(nodeId);
      node.addClass("path-node");
      if (index === 0 || index === path.length - 1) {
        node.addClass("endpoint-node");
      }
    });

    const pathEdges = [];
    for (let i = 0; i < path.length - 1; i++) {
      const edgeId = [path[i], path[i + 1]].sort().join("-");
      const edge = cy.getElementById(edgeId);
      edge.addClass("path-edge");
      pathEdges.push(edge);
    }

    // Animate the dash offset on a timer so the highlighted route looks
    // like it is continuously flowing from start to end.
    let offset = 0;
    flowTimerRef.current = setInterval(() => {
      offset -= 1;
      pathEdges.forEach((edge) => edge.style("line-dash-offset", offset));
    }, 40);
  }, [path]);

  return <div ref={containerRef} className="campus-graph" />;
}
