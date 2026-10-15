// Navbar.jsx
// A simple top navigation bar with the project name and section links.

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">CampusPath</span>
      <div className="navbar-links">
        <a href="#navigation">Navigation</a>
        <a href="#visualizer">Algorithm</a>
        <a href="#concepts">DM Concepts</a>
      </div>
    </nav>
  );
}
