import React from "react";
import { requests } from "../../api/requests";
import "../../App.css";

function LoginScreen({ history }) {
  let onLoginPress = async () => {
    try {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let res = await requests.auth.login({ email, password });
      if (res.status === 200) {
        //TODO navigate to dashboard
        history.push("/dashboard");
      }
    } catch (error) {
      alert("password or username incorrect");
    }
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
