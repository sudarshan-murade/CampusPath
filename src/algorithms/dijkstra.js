// dijkstra.js
//
// A simple, beginner-friendly implementation of Dijkstra's Shortest Path
// Algorithm. We do NOT use any external library for the algorithm itself -
// only plain JavaScript objects and loops, so it is easy to explain in a viva.
//
// HOW IT WORKS (matches the DM syllabus steps):
// 1. Set the start node's distance to 0, and every other node to Infinity.
// 2. Repeatedly pick the UNVISITED node with the smallest known distance.
// 3. Look at all of that node's neighbors (its edges).
// 4. If going through the current node gives a shorter path to a neighbor,
//    update that neighbor's distance.
// 5. Mark the current node as visited, and repeat until we reach the end
//    node (or run out of reachable nodes).
// 6. Walk backwards from the end node using "previous" to rebuild the path.

export function dijkstra(graph, start, end) {
  const distances = {}; // shortest known distance from start to each node
  const visited = {}; // nodes we have already finalized
  const previous = {}; // lets us rebuild the path at the end
  const steps = []; // a log of what happened, for the visualizer

  // Step 1: initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  steps.push({
    description: `Start at "${start}". Its distance is set to 0. Every other node starts at Infinity.`,
    distances: { ...distances },
    current: start,
  });

  while (true) {
    // Step 2: find the unvisited node with the smallest distance
    let currentNode = null;
    let smallestDistance = Infinity;

    for (const node in graph) {
      if (!visited[node] && distances[node] < smallestDistance) {
        smallestDistance = distances[node];
        currentNode = node;
      }
    }

    // No reachable unvisited node left - stop
    if (currentNode === null) {
      steps.push({
        description: "No more reachable nodes left to visit.",
        distances: { ...distances },
        current: null,
      });
      break;
    }
         
    // We reached the destination - we can stop early
    if (currentNode === end) {
      visited[currentNode] = true;
      steps.push({
        description: `Reached destination "${end}". Its shortest distance is now final.`,
        distances: { ...distances },
        current: currentNode,
      });
      break;
    }

    visited[currentNode] = true;

    // Step 3 & 4: check neighbors and update distances if we found a shorter path
    const neighbors = graph[currentNode];
    for (const neighbor in neighbors) {
      if (visited[neighbor]) continue;

      const edgeWeight = neighbors[neighbor];
      const distanceThroughCurrent = distances[currentNode] + edgeWeight;

      if (distanceThroughCurrent < distances[neighbor]) {
        distances[neighbor] = distanceThroughCurrent;
        previous[neighbor] = currentNode;
      }
    }

    steps.push({
      description: `Visited "${currentNode}" (distance ${distances[currentNode]}). Updated distances of its unvisited neighbors.`,
      distances: { ...distances },
      current: currentNode,
    });
  }

  // Step 6: rebuild the path by walking backwards through "previous"
  const path = [];
  let node = end;
  while (node !== null) {
    path.unshift(node);
    node = previous[node];
  }

  // If the path doesn't actually start at our start node, no route exists
  const pathExists = path[0] === start;

  return {
    path: pathExists ? path : [],
    totalDistance: pathExists ? distances[end] : Infinity,
    steps,
  };
}
