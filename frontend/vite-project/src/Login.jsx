import { useState } from "react";

function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // show error message
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Send request to backend
    fetch("http://localhost:3000/login",
       {
      method: "POST",
      headers: { "Content-Type": "application/json",

       },
      body: JSON.stringify({email: email, 
          password: password, 
             }),
    }
  )
      // convert promis data into json
      .then((response) => {
        return response.json();
      })

     
      .then((data) => {
        setMessage(data.message);
        alert("account is success fully created.")
      })

      // Handle  errors if promis is rejected
      .catch((error) => {
        console.log(error);
        setMessage("Server connection failed");
      });
     
  };

      function clearAccount(e) {
  e.preventDefault();

  fetch("http://localhost:3000/clearAccount", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      alert(data.message);
    })
    .catch((error) => {
      alert("Something went wrong");
      console.log(error);
    });
}
  return (
    <div className='outer-container'>
      <form className='form-container' onSubmit={handleLogin}>
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
        <button onClick={clearAccount}>clear account</button>
        <p className='message'>{message}</p>
      </form>
    </div>
  );
}

export default Login;
