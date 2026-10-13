import LeftAuthPage from "./LeftAuthPage"
import "./auth.css";
function CheckInbox() {
  return (
        <div className="AuthContainer">
         <LeftAuthPage />
         <div className="rightPartAuth">     
      <div className="claimContainer">
       
        <h2>Check your inbox</h2>
        <p>We sent a sign-in link to john@doe.dev. it works once and expires in 15 minutes-- you can close this tab.</p>
                  <input placeholder="open Gmail"/>
               <p>Resend link in 0.42</p>
               <strong>Wrong address? Use different email</strong>
        </div>       
      </div> 
    </div>
  )
}

export default CheckInbox
