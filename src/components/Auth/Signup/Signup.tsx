import React from 'react'
import useInput from '../../../utils/hooks/useInput';

const Signup = () => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
  const { value: confirmPassword, bind: bindConfirmPassword, reset: resetConfirmPassword } = useInput('');
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <input type="text" placeholder="Confirm Password"></input>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup
