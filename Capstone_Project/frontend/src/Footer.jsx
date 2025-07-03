import "./index.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Task Manager App — Built with ❤️</p>
    </footer>
  );
}
