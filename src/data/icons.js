// icons.js
//
// A small set of hand-drawn SVG icons, one per campus location type.
// Cytoscape can use an image as a node's background, so we build each
// icon as an SVG string and turn it into a "data:" URI it can load.
//
// Every icon uses the same accent color (#0f1424, our dark navy) on a
// transparent background, so it sits cleanly inside the teal node circle.

const ICONS = {
  library: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path d="M8 12c4-3 9-3 13 0v24c-4-3-9-3-13 0Z" fill="none" stroke="#0f1424" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M40 12c-4-3-9-3-13 0v24c4-3 9-3 13 0Z" fill="none" stroke="#0f1424" stroke-width="2.4" stroke-linejoin="round"/>
    </svg>`,

  canteen: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path d="M14 8v14a6 6 0 0 0 12 0V8" fill="none" stroke="#0f1424" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="14" y1="8" x2="14" y2="18" stroke="#0f1424" stroke-width="2.4"/>
      <line x1="18" y1="8" x2="18" y2="18" stroke="#0f1424" stroke-width="2.4"/>
      <line x1="20" y1="22" x2="20" y2="40" stroke="#0f1424" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M32 8c4 0 6 3 6 8s-2 8-6 8" fill="none" stroke="#0f1424" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="32" y1="24" x2="32" y2="40" stroke="#0f1424" stroke-width="2.4" stroke-linecap="round"/>
    </svg>`,

  it: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <rect x="8" y="10" width="32" height="20" rx="2" fill="none" stroke="#0f1424" stroke-width="2.4"/>
      <line x1="18" y1="38" x2="30" y2="38" stroke="#0f1424" stroke-width="2.4" stroke-linecap="round"/>
      <line x1="24" y1="30" x2="24" y2="38" stroke="#0f1424" stroke-width="2.4"/>
    </svg>`,

  lab: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <rect x="12" y="10" width="24" height="16" rx="1.5" fill="none" stroke="#0f1424" stroke-width="2.4"/>
      <path d="M8 34h32l-3 4H11Z" fill="none" stroke="#0f1424" stroke-width="2.4" stroke-linejoin="round"/>
    </svg>`,

  admin: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path d="M24 6 42 16v3H6v-3Z" fill="none" stroke="#0f1424" stroke-width="2.4" stroke-linejoin="round"/>
      <line x1="10" y1="21" x2="10" y2="36" stroke="#0f1424" stroke-width="2.4"/>
      <line x1="19" y1="21" x2="19" y2="36" stroke="#0f1424" stroke-width="2.4"/>
      <line x1="29" y1="21" x2="29" y2="36" stroke="#0f1424" stroke-width="2.4"/>
      <line x1="38" y1="21" x2="38" y2="36" stroke="#0f1424" stroke-width="2.4"/>
      <line x1="6" y1="40" x2="42" y2="40" stroke="#0f1424" stroke-width="2.4" stroke-linecap="round"/>
    </svg>`,

  auditorium: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <rect x="8" y="8" width="32" height="20" rx="2" fill="none" stroke="#0f1424" stroke-width="2.4"/>
      <path d="M14 34c4 4 16 4 20 0" fill="none" stroke="#0f1424" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M17 15 24 20 31 15" fill="none" stroke="#0f1424" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

  parking: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <rect x="8" y="10" width="32" height="28" rx="4" fill="none" stroke="#0f1424" stroke-width="2.4"/>
      <path d="M19 32V16h6a5 5 0 0 1 0 10h-6" fill="none" stroke="#0f1424" stroke-width="2.4" stroke-linejoin="round"/>
    </svg>`,
};

// Turns an SVG string into a data: URI that Cytoscape can use as
// a node's "background-image".
function toDataUri(svg) {
  const cleaned = svg.replace(/\s+/g, " ").trim();
  return `data:image/svg+xml,${encodeURIComponent(cleaned)}`;
}

export function getLocationIcon(type) {
  return toDataUri(ICONS[type] || ICONS.admin);
}
