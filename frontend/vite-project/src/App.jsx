import Login from "./Login";
import SignUp from "./SignUp";
import { Routes,Route } from "react-router-dom";
import "./Login.css";
function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
             </Routes>
          </div>
  )
}

export default App
