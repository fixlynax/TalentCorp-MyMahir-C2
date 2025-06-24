import { useState, useEffect } from 'react'

function Explanation() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    //Try commenting out this line to see the difference!
    setMessage(`The count was updated to ${count}`)
    
    // Cleanup function example
    return () => {
      console.log('Cleanup before next effect or unmount')
    }
  }, [count]) // Dependency array with count
  // What dependency array does, is basically tell the useEffect that whenever a change is detected in the
  // state variable above, it will run the function body inside it.
  // However, bear in mind that only the variable in the dependency will trigger the function body.
  // So mindful of what change is it that you are watching for.


  // Try switching this useEffect with the commented one below, and check the console for behaviour.

  useEffect(() => {
    console.log("This effect will run whenever a render OR re-render is being done")
  })

  // This useEffect above would run multiple times when you reload the page.


  // This useEffect below only runs once when the page is mounted.

//   useEffect(() => {
//     console.log('This effect runs only once on mount')
//   }, []) // Empty dependency array

  return (
    <>
      <h1>Understanding useEffect in React</h1>
      <div className="card">
        <h2>Current count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
        <p>{message}</p>
        
        <div className="explanation">
          <h3>How useEffect Works:</h3>
          <ul>
            <li>useEffect runs after every render by default</li>
            <li>The first effect above runs when count changes</li>
            <li>The second effect runs only once when component mounts</li>
            <li>The cleanup function runs before next effect or unmount</li>
            <li>Dependencies array controls when effect runs</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Explanation