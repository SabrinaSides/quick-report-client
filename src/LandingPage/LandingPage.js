import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm'
import './LandingPage.css'

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
          <h3>Keep all your reports in one place</h3>
          <p>Easily access multiple reports from one page</p>
        </div>
        <div className="feature">
          <h3>Keep all your reports in one place</h3>
          <p>Easily access multiple reports from one page</p>
        </div>
        <div className="feature">
          <h3>Keep all your reports in one place</h3>
          <p>Easily access multiple reports from one page</p>
        </div>
      </div>
      <SignUpForm />
    </div>
  );
}

export default LandingPage;
