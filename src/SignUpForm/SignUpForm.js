import React from 'react'
import './SignUpForm.css'

function SignUpForm() {
    return (
    <div className='sign-up-container'>
      <div className='sign-up-form'>
      <h3>Sign Up</h3>

      <form>
         <label>Name:</label>
        <input
        type='text'
        />
        <label>Email:</label>
        <input
        type='text'
        />
        <label>Password:</label>
        <input
        type='text'
        />
        <br />
        <button>Sign Up</button>
      </form>
      </div>
    </div>
    )
}

export default SignUpForm
