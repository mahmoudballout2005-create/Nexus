import React from "react";
import "./login.css";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import { Link } from "react-router-dom";
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
        <div className="SubloginContainer">
          <h1>Welcome Back</h1>
          <p>sign in to your account</p>

          <div className="inputGroup">
            <div className="emailInput">
              <label htmlFor="email">Email adress</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="passwordInput">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <span className="ForgetPassSpan">Forget password?</span>
          </div>
          <button className="SignInButton">Sign In</button>
          <div className="lineText">
            <span></span>
            <p>or contnue with</p>
            <span></span>
          </div>
        </div>
        <div className="googleButtonContainer">
          <GoogleLogin
            shape="rectangular"
            width="500"
            onSuccess={(credentialResponse: CredentialResponse) => {
              console.log("success");
            }}
            onError={() => {
              console.log("Google sign-in failed");
            }}
          />
        </div>
       
      </div> <div className="underSignup">
<p className="dontP">Don't have an account?</p>
<p className="SignupP" ><Link to="/signup">Sign up</Link></p>


        </div>
    </>
  );
}

export default LoginPage;
