import React from 'react';
//import SignUpForm from '../SignUpForm/SignUpForm'
import '../App.css'

function LandingPage() {
  return (
    <div>
      <h2>Skip the paper and pen- create and manage patient reports</h2>

      <div className="features-block">
        <div className="feature">
          <h3>Keep all your reports in one place</h3>
          <p>Easily access multiple reports from one page</p>
        </div>
        <div className="feature">
          <h3>Quickly create, edit and delete reports</h3>
          <p>Manage your report needs at the click of a button</p>
        </div>
        <div className="feature">
          <h3>More details about the app</h3>
          <p>Here's another intriguing paragraph</p>
        </div>
      </div>
      {/* <SignUpForm /> */}
    </div>
  );
}

export default LandingPage;
