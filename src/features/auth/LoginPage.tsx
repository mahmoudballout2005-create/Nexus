import React, { useState } from "react";
import "./login.css";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../../public/MainLogo.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
    const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="you@example.com"
              />  {emailError && <p className="emailError">{emailError}</p>}
            </div>
            <div className="passwordInput">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                 value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                placeholder="Enter your password"
              />{passError && <p className="PassError">{passError}</p>}

            
            </div>
            <span className="ForgetPassSpan">Forget password?</span>
          </div>
          <button
            className="SignInButton"
            onClick={() => {
              
              if (!email.includes("@") || !email.includes(".") ) {
                setEmailError("Please enter a valid email address.");
                
                return;
              }else if( pass.length<8){
                  setPassError("Password must be longer")
                  return;
                }
              setEmailError("");
              setPassError("");
              navigate("/sidebar");



            }}
          >
            Sign In
          </button>
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
      </div>{" "}
      <div className="underSignup">
        <p className="dontP">Don't have an account?</p>
        <p className="SignupP">
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
