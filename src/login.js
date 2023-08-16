import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./register";

const Login = () => {
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/run-python-script", {
        method: "POST",
      });

      const data = await response.text();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="ps-22">
      <div className="hero1">
        <div className="lines-bg3">
          <div className="lines-bg-child13" />
          <div className="lines-bg-child13" />
          <div className="lines-bg-child13" />
          <div className="lines-bg-child13" />
          <div className="lines-bg-child13" />
        </div>
        <div className="light1" />
        <div className="btns1">
          <div className="button7">
            <b className="buy-now5">Login</b>
          </div>
          <div className="button8">
            <b className="buy-now5">Request Demo</b>
          </div>
        </div>
        <div className="experience1">
          <div className="lines-bg4">
            <div className="lines-bg-child13" />
            <div className="lines-bg-child13" />
            <div className="lines-bg-child13" />
            <div className="lines-bg-child13" />
            <div className="lines-bg-child13" />
          </div>
          <div className="img21">
            <div className="buy-now5">by Pablo Merchán Montes on Unsplash</div>
          </div>
          <div className="txt1">
            <div className="weve-synthesized-the1">
              We’ve synthesized the world of PreSales into a knowledge
              representation that is the backbone of our Artificial
              Intelligence. Grounding our AI models in real PreSales experience
              produces recommendations you can trust—whether for winning more
              deals, ramping the team faster, or building repeatable processes
              that scale.
            </div>
            <div className="weve-synthesized-the1">
              The pre-sales process is a critical stage in any business, yet it
              is often plagued by inefficiencies - from time-consuming manual
              document parsing to difficulties identifying new product features
              and interpreting complex RFQs. These issues lead to lost time,
              potential errors, and missed sales opportunities.
            </div>
            <div className="button9">
              <b className="buy-now5">See More</b>
            </div>
          </div>
          <div className="info-21" />
          <div className="social-signup1">
            <div className="social-signup-child1" />
            <div className="parent">
              <div className="div2" />
              <div className="login-parent">
                <div className="login2">Login</div>
                <div className="more-secure-of">
                  More Secure of Data trust by leading industries
                </div>
              </div>
            </div>
            <div className="social-signup-child2" />
            <div className="social-signup-child3" />
            <div className="social-buttons1">
              <div className="button10">
                <div className="button-child2" />
                <div className="sign-up-with-linkedln-container">
                  <div className="sign-up-with3">Sign up with Linkedln</div>
                </div>
              </div>
              <div className="button11">
                <div className="button-child2" />
                <div className="sign-up-with-twitter-wrapper">
                  <div className="sign-up-with3">Sign up with Twitter</div>
                </div>
              </div>
              <div className="button12">
                <div className="button-child2" />
                <div className="sign-up-with-facebook-container">
                  <div className="sign-up-with3">Sign up with Facebook</div>
                </div>
              </div>
            </div>
          </div>
          <div className="normal-sign-up1">
            <div className="button13">
              <div className="button-child5" />
              <div className="sign-up-wrapper">
                <div className="sign-up-with3" onClick={handleClick}>
                  Sign in
                </div>
              </div>
            </div>
            <div className="email6">
              <div />
              <div className="email7">Email</div>
              <input className="email-child2" type="text" />
            </div>
            <div className="password5">
              <div className="password-child1" />
              <div className="email7">Password</div>
              <input className="email-child2" type="password" />
            </div>
            <div className="creating-an-account-means-you-group">
              <div className="creating-an-account1">
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and default Notification Settings
              </div>{" "}
              <input className="frame-child3" type="checkbox" />
            </div>
            <div className="sign-up-parent">
              <div className="login2">Sign in</div>
              <div className="get-started-absolutely1">
                Get started absolutely free
              </div>
            </div>
            <div className="sign-up-parent">
              <div className="login2">Sign in</div>
              <div className="get-started-absolutely1">
                Get started absolutely free
              </div>
            </div>

            <div className="frame-div" />
          </div>
        </div>
      </div>
      <div className="button14">
        <b
          className="buy-now5"
          onClick={() => {
            navigate("/request");
          }}
        >
          Request Demo
        </b>
      </div>
      <div className="header1">
        <div className="lines-bg5">
          <div className="lines-bg-child13" />
          <div className="lines-bg-child13" />
          <div className="lines-bg-child13" />
          <div className="lines-bg-child13" />
          <div className="lines-bg-child13" />
        </div>
        <img className="logo-icon2" alt="" src="/logo2.svg" />
        <div className="left1">
          <div className="about-us1">Home</div>
          <div className="about-us1">Product</div>
          <div className="about-us1">Features</div>
        </div>
        <div className="right1">
          <div className="about-us1">register</div>
          <div
            className="single-post1"
            onClick={() => {
              navigate("/register");
            }}
          >
            request for demo
          </div>
          <div className="figma-demo1" />
        </div>
      </div>
      <div className="button15">
        <b
          className="buy-now5"
          onClick={() => {
            navigate("/register");
          }}
        >
          Request Demo
        </b>
      </div>
    </div>
  );
};

export default Login;
