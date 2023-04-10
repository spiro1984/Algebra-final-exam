import React from "react";
import bornaImg from "../../images/borna.jpg";
import spiroImg from "../../images/spiro.jpg";
import './Login.scss'

const Login = ({ onLogin }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    const selectedUsername = event.target.elements.username.value;
    onLogin(selectedUsername);
  };

  return (

    <div className="Login">
     <form onSubmit={handleLogin}>
      <div className="Login-Form">
      <div>
        <label>
          <img src={bornaImg} alt="borna" className='Images'/><br />
          <input type="radio" name="username" value="Borna" className="Login-Radio" />
          Borna
        </label>
      </div>
      <div>
        <label>
          <img src={spiroImg} alt="Spiro" className='Images' /><br />
          <input type="radio" name="username" value="Špiro" className="Login-Radio" />
          Špiro
        </label>
      </div>
      </div>
      <button type="submit" className="Login-Button">Log in</button>

    </form>

    </div>

  );
};

export default Login;