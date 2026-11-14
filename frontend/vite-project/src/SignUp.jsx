import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    
     const [message, setMessage] = useState("");
     function handleSignup(e){
    e.preventDefault();
    fetch("http://localhost:3000/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:{password:password,email:email}
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("data",data.status);
        navigate("/login");
    })
    .catch((error)=>{
        console.log(error);
        setMessage("server error");
        
    })
     }
  return (
     <div className='outer-container'>
         <form onSubmit={handleSignup} className='form-container'>
             <h2>Sign UP</h2>
     <input type="text" placeholder="Enter your password" value={password} onClick={(e)=>setPassword(e.target.password)} required/>
     <input type="email" placeholder="Enter your email" value={email} onClick={(e)=>setEmail(e.target.email)} required/>
     <p onClick={()=>navigate("/login")}>do you have already account ?</p>
     <p className='message'>{message}</p>
     <button type="submit"></button>
     </form>
    </div>
  )
}

export default SignUp
