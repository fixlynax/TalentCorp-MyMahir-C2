import { NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <header className="main-header">
      <h1 className="site-title">📝 Task Manager</h1>
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => (isActive ? "active" : "")}>
          Tasks
        </NavLink>
      </nav>
    </header>
  );
}
