import "./auth.css";
import LeftAuthPage from "./LeftAuthPage";
function SetNewPassword() {
  return (
    <div className='AuthContainer'>
      <LeftAuthPage />

      <div className='rightPartAuth'>
        <div className='formremember'>
          <p>Remembered it?</p>
          <button>Log in</button>{" "}
        </div>
        <div className='formContainer'>
          <p style={{ color: "green", fontSize: "11px", Color: "#4F46E5" }}>
            RESET PASSWORD
          </p>
          <h3>Set a new password</h3>
          <p>
            Use at least 8 characters. A phrase you'll remember beats a string
            you won't.
          </p>
          <lable>New password</lable>
          <input type='password' placeholder='....' />
          <lable>Confirm password</lable>
          <input type='password' placeholder='......' />
          <button>Update password & log in</button>
        </div>
      </div>
    </div>
  );
}

export default SetNewPassword;
