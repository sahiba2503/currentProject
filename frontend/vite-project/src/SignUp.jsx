// import { useState } from "react"
// import { useNavigate } from "react-router-dom";

// function SignUp() {
//   const navigate = useNavigate();
//     const [password,setPassword] = useState("");
//     const [email,setEmail] = useState("");
    
//      const [message, setMessage] = useState("");
//      function handleSignup(e){
//     e.preventDefault();
//     fetch("http://localhost:3000/signup",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({password:password,email:email})
//     })
//     .then((response)=>response.json())
//     .then((data)=>{
//         alert("data",data.status);
//         navigate("/login");
//     })
//     .catch((error)=>{
//         console.log(error);
//         setMessage("server error");
        
//     })
//      }
//   return (
//      <div className='outer-container'>
//          <form onSubmit={handleSignup} className='form-container'>
//              <h2>Sign UP</h2>
//      <input type="password" placeholder="Enter your password" value={password} onClick={(e)=>setPassword(e.target.value)} required/>
//      <input type="email" placeholder="Enter your email" value={email} onClick={(e)=>setEmail(e.target.value)} required/>
//      <p onClick={()=>navigate("/login")}>do you have already account ?</p>
//      <p className='message'>{message}</p>
//      <button type="submit">click</button>
//      </form>
//     </div>
//   )
// }

// export default SignUp

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      // Check whether signup was successful
      if (!response.ok) {
        setMessage(data.message || "Signup failed");
        return;
      }

      alert(data.message || "Signup successful!");

      // Navigate only after successful signup
      navigate("/login");

    } catch (error) {
      console.log("Signup error:", error);
      setMessage("Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="outer-container">
      <form onSubmit={handleSignup} className="form-container">

        <h2>Sign Up</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        <p onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>

        <p className="message">{message}</p>

        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

      </form>
    </div>
  );
}

export default SignUp;
