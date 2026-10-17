import "./App.css";
import Signin from "./component/signin";
import CheckInbox from "./component/CheckInbox";
// import SignUp from "./component/Signup.jsx";
import { Routes, Route } from "react-router";
import SetNewPassword from "./component/SetNewPassword.jsx";
import Navbar from "./component/navbar.jsx";
function App() {
  return (
    <div className='mainContainer'>
      <Routes>
        {/* <Route path="/" element={<SignUp/>}></Route> */}
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/login' element={<Signin />}></Route>
        <Route path='/check' element={<CheckInbox />}></Route>
         <Route path='/SetPassword' element={<SetNewPassword />}></Route>
      </Routes>
    </div>
  );
}

export default App;
