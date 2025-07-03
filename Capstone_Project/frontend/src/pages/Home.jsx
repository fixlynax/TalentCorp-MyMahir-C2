import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const textbox = {
      padding: "10px 15px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      width: "100%",
      maxWidth: "400px",
      outline: "none",
      transition: "0.2s ease-in-out",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
   };


   const login = async (e) => {
      e.preventDefault();
      console.log(`Email: ${email}`);
      const response = await fetch("http://localhost:3000/auth/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ email, password })
      });
      const result = await response.json();
      localStorage.setItem("jwt", result.token);
      window.location.href = "/tasks";
   };

   const goToRegister = () => {
      navigate("/register");
   };

   return (
      <div className="container">
         <h1>Welcome to the Task Manager App</h1>
         <p>Please login to use the Task Manager</p>
         <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form style={{alignItems: "center" }}>
               <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={textbox} />
               <br />
               <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={textbox} />
               <br />
               <input type="submit" onClick={login} value="Login" />
            </form>
         </div>
         <p style={{ marginTop: "1rem" }}>
            Don't have an account?{" "}
            <span onClick={goToRegister} style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>
               Register here
            </span>
         </p>
      </div>
   );
}
