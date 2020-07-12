import React from 'react'

const Signup: React.FC = () => {
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
