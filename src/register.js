import "./register.css";
import { Navigate, useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate= useNavigate();
  return (
    <div className="hero">
      <div className="lines-bg1">
        <div className="lines-bg-child3" />
        <div className="lines-bg-child3" />
        <div className="lines-bg-child3" />
        <div className="lines-bg-child3" />
        <div className="lines-bg-child3" />
      </div>
      <div className="light" />
      <div className="btns">
        <div className="button">
          <b className="by-pablo-merchn">Login</b>
        </div>
        <div className="button1">
          <b className="by-pablo-merchn">Request Demo</b>
        </div>
      </div>
      <div className="experience">
        <div className="lines-bg2">
          <div className="lines-bg-child3" />
          <div className="lines-bg-child3" />
          <div className="lines-bg-child3" />
          <div className="lines-bg-child3" />
          <div className="lines-bg-child3" />
        </div>
        <div className="img2">
          <div className="by-pablo-merchn">
            by Pablo Merchán Montes on Unsplash
          </div>
        </div>
        <div className="txt">
          <div className="weve-synthesized-the">
            We’ve synthesized the world of PreSales into a knowledge
            representation that is the backbone of our Artificial Intelligence.
            Grounding our AI models in real PreSales experience produces
            recommendations you can trust—whether for winning more deals,
            ramping the team faster, or building repeatable processes that
            scale.
          </div>
          <div className="weve-synthesized-the">
            The pre-sales process is a critical stage in any business, yet it is
            often plagued by inefficiencies - from time-consuming manual
            document parsing to difficulties identifying new product features
            and interpreting complex RFQs. These issues lead to lost time,
            potential errors, and missed sales opportunities.
          </div>
          <div className="button2">
            <b className="by-pablo-merchn">See More</b>
          </div>
        </div>
        <div className="info-2" />
        <div className="social-signup">
          <div className="social-signup-child" />
          <div className="wrapper">
            <div className="div1" />
          </div>
          <div className="social-signup-item" />
          <div className="social-signup-inner" />
          <div className="social-buttons">
            <div className="button3">
              <div className="button-child" />
              <div className="sign-up-with-linkedln-wrapper">
                <div className="sign-up-with">Sign up with Linkedln</div>
              </div>
            
              <ion name="logo-facebook"></ion>
            </div>
            <div className="button4">
              <div className="button-child" />
              <div className="sign-up-with-twitter-parent">
                <div className="sign-up-with1">Sign up with Twitter</div>
              
              </div>
            </div>
            <div className="button5">
              <div className="button-child" />
              <div className="sign-up-with-facebook-wrapper">
                <div className="sign-up-with">Sign up with Facebook</div>
              </div>
           
            </div>
          </div>
        </div>
        <div className="normal-sign-up">
          <div className="button6">
            <div className="button-child1" />
            <div className="click-me-wrapper">
              <div className="sign-up-with"  onClick={ ()=>{  
    window.confirm('Data Stored Successfully')
    }
  }>Click me</div>
            </div>
          </div>
          <div className="email">
            <div className="name">Email</div>
            <input className="email-child" type="text" />
          </div>
          <div className="email">
            <div className="email-child" />
            <div className="name">Email</div>
            <input className="email-child" type="text" />
          </div>
          <div className="email4">
            <div className="email-child" />
            <div className="name">Company name</div>
            <input className="email-child" type="text" />
          </div>
          <div className="email5">
            <div className="email-child" />
            <input className="email-child" type="text" />
            <div className="name">Name</div>
          </div>
          <div className="password3">
            <div className="password-item" />
            <div className="name">Contact Number</div>
            <input className="email-child" type="number" />
          </div>
          <div className="password4">
            <div className="password-item" />
            <div className="name">Location</div>
            <input className="email-child" type="text" />
          </div>
          <div className="creating-an-account-means-you-parent">
            <div className="creating-an-account">
              Creating an account means you’re okay with our Terms of Service,
              Privacy Policy, and default Notification Settings
            </div>
            <input className="frame-child3" type="checkbox" />
          </div>
          <div className="register-wrapper">
            <div className="register">Register</div>
          </div>
          <div className="get-started-absolutely-free-de-wrapper">
            <div className="sign-up-with">Get started absolutely free demo</div>
          </div>
   
          
        </div>
        <div className="demo-request-elevate-container">
          <p className="demo-request">
            <b>DEMO REQUEST:</b>
          </p>
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">Elevate Your PreSales Team</p>
          <p className="blank-line">
            Your PreSales team is the key to closing more business. Hope will
            help you do it.
          </p>
          <p className="blank-line">&nbsp;</p>
          <ul className="deploy-smarter-workstreams-and">
            <li className="maximize-forecast-accuracy-de">
              <span>Deploy smarter workstreams and prove impact</span>
            </li>
            <li className="maximize-forecast-accuracy-de">
              <span>
                Maximize forecast accuracy, deal velocity, and win rates
              </span>
            </li>
            <li className="maximize-forecast-accuracy-de">
              <span>Bring product intel from the field to the roadmap</span>
            </li>
            <li className="maximize-forecast-accuracy-de">
              <span>Run faster POCs and nail the technical win</span>
            </li>
            <li>
              <span>Do more demos without having to hire more</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
