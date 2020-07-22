import React from 'react';
import useInput from '../../../utils/hooks/useInput';
import { auth } from '../../../store/user';
import { connect } from 'react-redux';

interface Props {
  login: Function
}
const Login = (props: Props) => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
  const method: string = 'login';

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.login(method, email, password);
    resetEmail();
    resetPassword();
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" {...bindEmail}></input>
        <input type="text" placeholder="Password" {...bindPassword}></input>
        <input type="submit" />
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (method, email, password) => dispatch(auth(method, email, password))
  }
}

export default connect(null, mapDispatchToProps)(Login);
