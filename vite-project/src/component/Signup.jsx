import "./signup.css";

import bloglogo from "../assets/mark.jpg";
function Signup() {
  return (
    <div className="signupContainer">
      <div className="leftPartSignUp">
        <div className="blogifyContainer">
              <img src={bloglogo} alt="Food" /><strong>Blogify</strong>
        </div>
       <div className="ithinkContainer">
        <p><i>I think in Hindi and write in English. Quill made me brave enough to hit publish.</i></p>
        <div className="jdContainer"><div><img src={bloglogo} alt="Food" /></div><div><p>john Done</p><p>john.blogify.com. writing since 2024</p></div></div>
        
        <div className="translateContainer"><h6>TRANSLATED.HINDI</h6><i>"feels like distance"</i>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor officiis quae iure facere cupiditate sint cum, </p>
        <h4>Show original</h4>
        </div>
        </div>
        <div> 12,400 writers . 5 languages one very helpful Quill</div>
       
        </div>
      <div className="rightPartSignUp">
        <div>Already have a blog ? <button>Log in</button></div>
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
        <button>Create my blog</button>
        <button>Continue with Google</button>
        <button>Continue with GitHub</button>
        <p>By continuing you agree to Blogify's Terms and Privacy Policy. Your address can be changed once in the first 30 days.</p>
      </div>
    </div>
  )
}

export default Signup
