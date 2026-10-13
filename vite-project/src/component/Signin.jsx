import "./auth.css";
import Leftsignup from "./LeftAuthPage.jsx";

function Signin() {
  return (
    <div className='AuthContainer'>
      <Leftsignup />
      <div className='rightPartAuth'>
        <div className='claimContainer'>
        <h2>Log in to your notebook</h2>
        <label>Email</label>
        <input placeholder='john@doe.dev' />
        <p>We'll email you a one-time link_ no password needed</p>
        </div>
        <div className='claimbtn'>
          <button className='createbtn'>Email me a magic link</button>
          <button>Continue with Google</button>
          <button>Continue with GitHub</button>
          <p>Forgot password?</p>
          <p>New here? Claim your address</p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
