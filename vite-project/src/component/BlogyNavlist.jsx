
import logo from "../assets/mark.jpg";
function BlogyNavlist() {
  return (
    <div className="nav-outer-container">
      <div className="navlistContent">
             <div className="navLink">
              <img src={logo}/>
             <h3>Blogify</h3>
             </div>
             <div className="blogydetailfooter">@ 2026 Blogify</div>
             </div>
             <div className="navListCon">
             <ul>
             <li>About</li>
             <li>Writer guidelines</li>
             <li>Privacy</li>
             <li>Terms</li>
             <li>Status</li>
             </ul>
             </div>
             <div className="navlistMode">
                <ul>
                    <li className="footerListbtn">Light</li>
                    <li>Dark</li>
                    <li>System</li>
                </ul>
             </div>
    </div>
  )
}

export default BlogyNavlist
