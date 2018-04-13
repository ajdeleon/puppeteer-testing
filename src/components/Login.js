import React from 'react'

const Login = (props) => (
  <div>
    <div class="form">
      <form onSubmit={props.submit} classname="login-form">
        <input type="text" data-testid="firstName" placeholder="First Name" />
        <input type="text" data-testid="lastName" placeholder="Last Name" />
        <input type="text" data-testid="email" placeholder="Email" />
        <input type="password" data-testid="password" placeholder="password" />
        <button data-testid="submit">Login</button>
      </form>
    </div>
  </div>
)

export default Login
