import "./signup.css";
import Leftsignup from "./LeftAuthPage.jsx";

function Signup() {
  return (
    <div className="AuthContainer">

       <div className="leftPartSignUp">
          <Leftsignup/>
       </div>
      
      <div className="rightPartAuth">
      <div className="alreadyContainer"> <p>Already have a blog ? </p><button>Log in</button></div>
      <div className="claimContainer">
        <h2>Claim your corner</h2>
        <p>Pick the address readers will remember. You can write in any language _ Quill takes care of the rest.</p>
        <label>Your blog address</label>
        <input placeholder="https://john.blogify.com"/>
        <label >Your name</label>
        <input placeholder="Ada Lovelace"/>
        <label>Email</label>
        <input placeholder="john@doe.dev"/>
        <label>Password</label>
        <input placeholder="At least 8 characters"/>
        <p>Prefer no password? Use a magic link or Google on the next step.</p>
        </div>
        <div className="claimbtn">
        <button className="createbtn">Create my blog</button>
        <button>Continue with Google</button>
        <button>Continue with GitHub</button>
        <p>By continuing you agree to Blogify's Terms and Privacy Policy. Your address can be changed once in the first 30 days.</p>
        </div>
      </div>
    </div>
  )
}

export default Signup
