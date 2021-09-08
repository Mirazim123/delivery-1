import React from "react";
import { requests } from "../../api/requests";

function LoginScreen() {
  let onLoginPress = async () => {
    try {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let res = requests.auth.login({ email, password });
    } catch (error) {}
  };

  return (
    <div className="app">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="right-inner">
          <h1>welcome</h1>
          <div className="inputs">
            <input id="email" type="Email" placeholder="Email" />
            <input id="password" type="Password" placeholder="Password" />
          </div>
          <button onClick={onLoginPress}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
