
import './App.css';
import Signin from './component/signin';
import CheckInbox from "./component/CheckInbox";
import SignUp from "./component/Signup.jsx";
import {Routes,Route} from "react-router"
function App() {
  return (
    <div className='mainContainer'>
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/login" element={<Signin/>}></Route>
        <Route path="/check" element={<CheckInbox/>}></Route>
         </Routes>
         
    </div>
  )
}

export default App
