import React from "react";
import "./login.css";
import MainLogo from "../../../public/MainLogo.png";
function LoginPage() {
  return (
    <>
      <div className="TopIconH">
        <img src={MainLogo} />
        <h1>Nexus</h1>
      </div>
      <p className="pTop">Smart Buissness Intelligence </p>
      <div className="loginContainer">
        <div className="SubloginContainer"><h1>Welcome Back</h1>
<p>sign in to your account</p></div>
        
      </div>
    </>
  );
}

export default LoginPage;
