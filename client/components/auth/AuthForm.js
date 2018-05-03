import React from 'react'
import { Link } from 'react-router-dom'

const AuthForm = ({ type, handleSubmit, error, user }) => {
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="column">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className="column">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <button type="submit">{type}</button>
        {error && <div>{error}</div>}
      </form>
      <form method="get" action="/auth/google">
        <button type="submit" className="btn bg-red white p1 rounded">
          Login with Google
        </button>
      </form>
    </div>
  )
}

export default AuthForm
