import { Link } from "react-router-dom";

function MiniActivityHome(){
  return (
    <div>
      <h1>This is the home page!</h1>
      <Link to="/about">This is a link to the about page</Link>
    </div>
  )
}

function MiniActivityAbout(){
  return (
    <div>
      <h1>This is the about page!</h1>
      <Link to="/home">This is a link to the home page</Link>
    </div>
  )
}

export {MiniActivityHome, MiniActivityAbout}