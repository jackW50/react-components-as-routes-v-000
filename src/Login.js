import React from 'react';

class Login extends React.Component {

  render() {
    return(
      <div>
        <form>

            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type='submit' value='Login' />

        </form>
      </div>
    )
  }
};

export default Login;
