import React from 'react'
import './Popup.css'


function Popup(props) {
  function handleGoogleSignIn() {
    // Trigger Google Sign-In
    (window.gapi.auth2.getAuthInstance().signIn().then(
      (googleUser) => {
        // Handle the sign-in success here, e.g., get user data
        const profile = googleUser.getBasicProfile();
        console.log('User signed in:', profile.getName());
    
        // Close the popup
        props.setTrigger(false);
        window.close();
      },
      (error) => {
        // Handle sign-in error
        console.error('Google Sign-In Error:', error);
        props.setTrigger(false);
        window.close();
      }
    ));
    
  }

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <div className='container-sign'>
              <p className='welcome'>Welcome</p>
              <p className='welcome-text'>Sign in or Sign up to continue</p>
              <div className='google-sign'>
                <p style={{ cursor: 'pointer' }} onClick={handleGoogleSignIn}>Continue with Google</p>
              </div>
              <div className='apple-sign'>
                <p>Continue with Apple</p>
              </div>
              <hr style={{   border: '0.5px solid #E8E8E2', width:'350px', margin: '30px'}} />
              <input placeholder='hendry@example.com'></input>
              <p style={{fontSize:'12px'}}>Continue with Email</p>
            </div>
            <button className='close-btn' onClick={()=>props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup