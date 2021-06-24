import React from 'react';
import '../styles/LandingPage.css'
import NurseTyping from '../images/nurse-typing.jpg'

function LandingPage() {
  return (
    <div>
      <div className="features-block">
      <h2>Skip the paper and pen- create and manage patient reports</h2>
      <img src={NurseTyping} alt='nurse typing on laptop'/>
        <div className="feature">
          <h3>Keep all your patient reports in one place</h3>
          <p>Easily access multiple reports from one page</p>
        </div>
        <div className="feature">
          <h3>Quickly create, edit and delete reports</h3>
          <p>Manage your report needs at the click of a button</p>
        </div>
      </div>

      
    </div>
  );
}

export default LandingPage;
