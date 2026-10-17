

import logo from "../assets/mark.jpg";
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
       <div className="navSearchlink"><input type="text" placeholder="Search stories, writers,topics /" />
       <button>log in</button>
       <button>start writing</button>
       </div>
    </div>
  )
}

export default Navbar
