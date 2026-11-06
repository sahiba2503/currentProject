

import logo from "../assets/mark.jpg";
import threeline from "../assets/iconthree.png";
function Navbar() {
  return (
    <div className="navbarContainer">
      
       <div className="navLink">
        <img src={logo}/>
       <ul>
        <li>Blogify</li>
        <li>Explore</li>
        <li>Trending</li>
        <li>Topics</li>
       </ul>
       </div>
       <div className="navSearchlink">
        <input type="text" placeholder=" Search stories, writers,topics /" />
       <p>log in</p>
       <button>start writing</button>
       </div>
       <div className="threeline"
       ><img src={threeline} alt="" /></div>
    </div>
  )
}

export default Navbar
