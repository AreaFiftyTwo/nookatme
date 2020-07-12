import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login;
