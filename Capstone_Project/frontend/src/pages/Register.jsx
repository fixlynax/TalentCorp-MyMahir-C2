import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const textbox = {
    padding: 5,
    margin: 5,
    placeItems: "center",
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message || "Registration failed");
      } else {
        setMessage(result.message); // "User registered"
      }
    } catch (error) {
      console.error("Register failed:", error);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div>
      <h1>Register to the Task Manager App</h1>
      <p>Create your account</p>
      {message && <p>{message}</p>}
      <form>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={textbox}
          required
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={textbox}
          required
        />
        <br />
        <input type="submit" onClick={register} value="Register" />
      </form>
    </div>
  );
}
