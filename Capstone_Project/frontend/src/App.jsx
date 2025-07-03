import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import Register from "./pages/Register";
import Header from "./Header"; // or "./components/Header" if it's inside a folder
import Footer from "./Footer"; // same here
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
