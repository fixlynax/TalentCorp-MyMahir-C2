import { useState } from 'react'
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { Link } from 'react-router-dom';

function StartPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>You need to do this in your terminal of your react app folder!</h1>
      <div className="card">
        <p>
          <code>npm install react-router-dom</code>
        </p>
      </div>
      <p className="read-the-docs">
        Just install and run this app, and try going to{" "}
        <a href="/explanation">http://localhost:5173/explanation</a> for more
        info
      </p>
      <p className="read-the-docs">
        Now, let's navigate to the <Link to="/Home">homepage</Link> for our Mini Activity
      </p>
      <p className="read-the-docs">
        Once you are done with the Mini Activity, this is how the assignent should work, <Link to="/profile/Howie">Howie</Link> OR <Link to="/profile/Siti">Siti</Link>
      </p>
    </>
  );
}

export default StartPage;
