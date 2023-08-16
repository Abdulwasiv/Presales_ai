import "./home.css";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import Hero from "./register";
import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
></link>;

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: "d0a16a1d3f9d64e375b3c4ecc4b8d8ca2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);

  return (
    <div className="ps-ai">
      <div className="hero2">
        <div className="lines-bg6">
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
        </div>
        <div className="light2" />
        <div className="the-ai-powered-platform">
          The AI-Powered Platform for PreSales
        </div>
        <div className="btns2">
          <div className="button16">
            <b
              className="convert-man-power"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </b>
          </div>
          <div className="button17">
            <b
              className="convert-man-power"
              onClick={() => {
                navigate("/register");
              }}
            >
              Request Demo
            </b>
          </div>
        </div>
        <div className="button18">
          <b
            className="convert-man-power"
            onClick={() => {
              navigate("/register");
            }}
          >
            Request Demo
          </b>
        </div>
        <div className="button19">
          <b
            className="convert-man-power"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </b>
        </div>
      </div>
      <div className="button20">
        <b className="convert-man-power">Request Demo</b>
      </div>

      <div className="video">
        <img className="play-icon" alt="" src="/play.svg" />
        <div className="convert-man-power-into-automat-wrapper"></div>
      </div>
      <div className="about2">
        <div className="headline">
          <div className="efficient-growth-starts">{`Efficient Growth Starts with PreSales `}</div>
          <div className="description">
            <div className="presaleai-enables-automating">
              Presale.ai enables automating data parsing and referencing,
              identifying new features in proposals (proposed by various
              pre-sales engineer across geography), auto-generating BOMs,
              interpreting RFQs, and highlighting document errors before they
              reach the customer and in competitor analysis (highlighting USP
              offering)s.
            </div>
            <div className="button21">
              <div className="buy-now16">More details</div>
            </div>
          </div>
        </div>
        <div className="points">
          <div className="rectangle-group">
            <div className="frame-child5" />
            <div className="data-parsing-and">
              Data Parsing and Referencing Parse docs, generate referenced
              responses
            </div>
          </div>
          <div className="rectangle-group">
            <div className="frame-child5" />
            <div className="data-parsing-and">
              <p className="bom-auto-generation">BOM Auto-Generation</p>
              <p className="bom-auto-generation">
                {" "}
                Generate BOM table from analyzed dataset
              </p>
            </div>
          </div>
          <div className="rectangle-group">
            <div className="frame-child5" />
            <div className="data-parsing-and">
              RFQ Interpretation Summarize critical RFQ points, reduce reading
              time
            </div>
          </div>
        </div>
      </div>
      <div className="experience2">
        <div className="lines-bg7">
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
        </div>
        <div className="continuous-rewarding-system">
          Continuous rewarding system for meticulous users Empowering existing
          and new user to enhance productivity
        </div>
        <div className="img22">
          <div className="convert-man-power">
            by Pablo Merchán Montes on Unsplash
          </div>
        </div>
        <div className="txt2">
          <div className="weve-synthesized-the2">
            We’ve synthesized the world of PreSales into a knowledge
            representation that is the backbone of our Artificial Intelligence.
            Grounding our AI models in real PreSales experience produces
            recommendations you can trust—whether for winning more deals,
            ramping the team faster, or building repeatable processes that
            scale.
          </div>
          <div className="weve-synthesized-the2">
            The pre-sales process is a critical stage in any business, yet it is
            often plagued by inefficiencies - from time-consuming manual
            document parsing to difficulties identifying new product features
            and interpreting complex RFQs. These issues lead to lost time,
            potential errors, and missed sales opportunities.
          </div>
          <div className="button22">
            <b className="convert-man-power">See More</b>
          </div>
        </div>
        <div className="info-22">
          <div className="img1">
            <img className="image-icon" alt="" />
            <div className="border" />
            <div className="to-automate-the">To Automate the Presales AI</div>
          </div>
          <div className="txt3">
            <div className="creating-efficiencies-for">
              Creating efficiencies for future growth means leveraging AI to
              augment workflows and bring precision to every department in the
              company. HOPE is the AI pioneer for PreSales, utilizing large
              language models and ensemble AI techniques which are the backbone
              of new services like GPT. By applying general purpose AI
              innovations to the specific domain of PreSales, Hope can
              dramatically increase the impact of every Solutions Consultant.
            </div>
            <div className="presalesai-is-designed">
              Presales.ai is designed to address these challenges head-on. Our
              AI-driven application streamlines pre-sales activities by enabling
              pre-sales, sales and the product team to automate tasks leading to
              shorter TAT on proposals with maximum quality and efficiency.
            </div>
            <div className="button23">
              <b
                className="convert-man-power"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Request Demo
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="img23">
        <div className="circled-text1">
          <div className="div10">
            <div className="copy-your-stunning40">Y</div>
            <div className="copy-your-stunning41">o</div>
            <div className="copy-your-stunning42">u</div>
            <div className="copy-your-stunning43">r</div>
            <div className="copy-your-stunning44"> </div>
            <div className="copy-your-stunning45">S</div>
            <div className="copy-your-stunning46">t</div>
            <div className="copy-your-stunning47">u</div>
            <div className="copy-your-stunning48">n</div>
            <div className="copy-your-stunning49">n</div>
            <div className="copy-your-stunning50">i</div>
            <div className="copy-your-stunning51">n</div>
            <div className="copy-your-stunning52">g</div>
            <div className="copy-your-stunning53"> </div>
            <div className="copy-your-stunning54">C</div>
            <div className="copy-your-stunning55">o</div>
            <div className="copy-your-stunning56">f</div>
            <div className="copy-your-stunning57">f</div>
            <div className="copy-your-stunning58">e</div>
            <div className="copy-your-stunning59">e</div>
          </div>
          <div className="div11">
            <div className="copy-your-stunning60">Y</div>
            <div className="copy-your-stunning61">o</div>
            <div className="copy-your-stunning62">u</div>
            <div className="copy-your-stunning63">r</div>
            <div className="copy-your-stunning64"> </div>
            <div className="copy-your-stunning65">S</div>
            <div className="copy-your-stunning66">t</div>
            <div className="copy-your-stunning67">u</div>
            <div className="copy-your-stunning68">n</div>
            <div className="copy-your-stunning69">n</div>
            <div className="copy-your-stunning70">i</div>
            <div className="copy-your-stunning71">n</div>
            <div className="copy-your-stunning72">g</div>
            <div className="copy-your-stunning73"> </div>
            <div className="copy-your-stunning74">C</div>
            <div className="copy-your-stunning75">o</div>
            <div className="copy-your-stunning76">f</div>
            <div className="copy-your-stunning77">f</div>
            <div className="copy-your-stunning78">e</div>
            <div className="copy-your-stunning79">e</div>
          </div>
          <div className="bottom1" />
          <div className="top1" />
          <div className="center2">
            <div className="center3" />
          </div>
        </div>
        <div className="ai-into-picture">AI into picture main stream</div>
        <img className="img-icon4" alt="" />
        <div className="border1" />
      </div>
      <div className="news">
        <div className="headline1">
          <div className="to-target-cutomers">To Target Cutomer’s need</div>
          <div className="btn-arrow"></div>
        </div>
      </div>
      <div className="footline1">
        <div className="footline-item" />
        <div className="subscribe1">
          <div className="to-target-cutomers">Connect with us...</div>
          <div className="form1">
            <div className="your-email-here1">Your email here</div>
            <div className="btn1">
              <b className="sign-up6">Sign up</b>
            </div>
          </div>
        </div>
        <div className="footer3">
          <div className="footer4">
            <img className="logo-icon4" alt="" src="/logo3.svg" />
            <div className="navigation1">
              <div className="row4">
                <div className="who-we-are1">Homepage</div>
                <div className="our-coffee4">Product</div>
                <div className="our-coffee4">Features</div>
              </div>
              <div className="row5">
                <div className="our-coffee4">customer</div>
                <div className="our-coffee4">company</div>
                <div className="request3">support</div>
              </div>
            </div>
            <div className="social1">
              <div className="row6">
                <div className="div12">
                  <img
                    className="icons-social-medium2"
                    alt=""
                    src="/icons--social--medium2.svg"
                  />
                </div>
                <div className="div13">
                  <img
                    className="icons-social-medium2"
                    alt=""
                    src="/icons--social--dribbblelogo1.svg"
                  />
                </div>
              </div>
              <div className="row6">
                <div className="div13">
                  <img
                    className="icons-social-medium2"
                    alt=""
                    src="/icons--social--behance2.svg"
                  />
                </div>
                <div className="div12">
                  <img
                    className="icons-social-medium2"
                    alt=""
                    src="/icons--social--linkedin2.svg"
                  />
                </div>
                <div className="div13">
                  <img
                    className="icons-social-medium2"
                    alt=""
                    src="/icons--social--twitter1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer1">
            <div className="text1">
              <div className="convert-man-power">
                © 2023 Hope. Some rights reserved.
              </div>
              <div className="convert-man-power">IN INDIA</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header2">
        <div className="lines-bg8">
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
          <div className="lines-bg-child28" />
        </div>
        <img className="logo-icon5" alt="" src="/logo2.svg" />
        <div className="left2">
          <div
            className="our-coffee4"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div className="our-coffee4">Product</div>
          <div className="our-coffee4">Features</div>
        </div>
        <div className="right2">
          <div
            className="our-coffee4"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
          <div
            className="single-post2"
            onClick={() => {
              navigate("/register");
            }}
          >
            request for demo
          </div>
          <div className="request3" />
        </div>
      </div>
      <div className="button24">
        <b
          className="convert-man-power"
          onClick={() => {
            navigate("/register");
          }}
        >
          Request Demo
        </b>
      </div>
      <div className="rectangle-parent2">
        <div className="frame-child5" />
        <div className="data-parsing-and">
          Automatic New Feature Identification Detect and extract new features
          from proposals
        </div>
      </div>
      <div className="rectangle-parent2">
        <div className="frame-child5" />
        <div className="data-parsing-and">
          Automatic New Feature Identification Detect and extract new features
          from proposals
        </div>
      </div>
      <div className="rectangle-parent4">
        <div className="frame-child5" />
        <div className="data-parsing-and">
          AI automated reminder Prompt follow up with key stakeholders
        </div>
      </div>
      <div className="rectangle-parent5">
        <div className="frame-child5" />
        <div className="data-parsing-and">
          AI automated reminder Prompt follow up with key stakeholders
        </div>
      </div>
    </div>
  );
};

export default Home;
