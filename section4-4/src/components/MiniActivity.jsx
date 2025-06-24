import { useState } from "react"

function MiniActivity(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    
    return (
    <div>
      <form>
        <input 
            type="username" 
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            />
        <input 
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />

        <h3>Username: {username}</h3>
        <h3>Email: {email}</h3>
      </form>
    </div>
  )
}

export default MiniActivity