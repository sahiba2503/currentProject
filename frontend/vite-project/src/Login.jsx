import { useState } from "react";
import "./Login.css";

function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // show error message
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Send request to backend
    fetch("http://localhost:3000/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      // handle promish result
      .then((response) => {
        return response.json();
      })

      // convert data into json
      .then((data) => {
        setMessage(data.message);
      })

      // Handle network errors
      .catch((error) => {
        console.log(error);
        setMessage("Server connection failed");
      });
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleLogin}>
        <h2>Welcome Back!</h2>
        <p>Please login to your account</p>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
        <p className='message'>{message}</p>
      </form>
    </div>
  );
}

export default Login;
