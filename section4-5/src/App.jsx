import Assignment from "./components/Assignment"
import Explanation from "./components/Explanation"
import MiniActivity from "./components/MiniActivity"

function App() {

  return (
    <div>
      <h1>Explanation!</h1>
      <Explanation/>
      <hr />
      <h1>Mini Activity</h1>
      <MiniActivity/>
      <h1>Assignment: Quote Loader</h1>
      <Assignment/>
    </div>
  )
}

export default App