import "./signup.css";
function Signup() {
  return (
    <div className="signupContainer">
      <div className="leftPartSignUp">
        <h5>Blogify</h5>
        <p><i>I think in Hindi and write in English. Quill made me brave enough to hit publish.</i></p>
        <h6>hohn Done</h6>
        <p>john.blogify.com writing since 2024</p>
        <div><h4>TRANSLATED.HINDI</h4><i>"feels like distance"</i>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor officiis quae iure facere cupiditate sint cum, </p>
        <h4>Show original</h4>
        </div>
        12,400 writers . 5 languages one very helpful Quill
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
