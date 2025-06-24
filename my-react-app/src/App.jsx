// import "./App.css"
import { useState } from "react"
import Welcome from "./Welcome"
import { btnClick } from "./btnClick";
import Profile from "./components/Profile";

function App() {
  const myName = "Paul"
  const fullName = "Paula Abdul"
  let fruits = ["Apple", "Mango", "Banana", "Kiwi", "Watermelon", "Orange", "Lemon"]

  let count = 0

  const increaseCount = () => {
    count++
    console.log(count)
  }

  let [stateCount, setStateCount] = useState(0)

  const profiles = [
    {
      name: "Paul",
      title: "Software Engineer",
      imageUrl: "https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGluJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Tony Stark",
      title: "Genius Billionaire Philanthrophist",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDgZHqmr2vZE83NizkSqV544kEpoCXnUBEw&s"
    },
    {
      name: "Hiccup",
      title: "Master of Dragons",
      imageUrl: "https://www.giantbomb.com/a/uploads/scale_medium/13/135472/1983080-hiccup_haddock.jpg"
    }
  ]

  return (
    <div>
      <Welcome name={myName} fullName={fullName}/>
      <h4>List of hobbies</h4>
      <ul>
        <li>Programming</li>
        <li>Learning</li>
        <li>Basketball</li>
      </ul>

      {myName == "Paul" ? <button onClick={() => btnClick(myName)}>It's Paul!</button> : <h2>It's not Paul!</h2>}
      <ol>
        {fruits.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ol>

      {/* {profiles.map((profile, i) => (
        <Profile key={i} name={profile.name} title={profile.title} imageUrl={profile.imageUrl}/>
      ))} */}

      <button onClick={() => setStateCount(stateCount + 1)}>Count: {stateCount}</button>
    </div>
  );
}
export default App
