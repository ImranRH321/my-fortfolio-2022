import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
import "animate.css";

const About = () => {
  return (
    <div className="about  animate__backInDown  animate__backInDown">
      <h1 className="text-start fw-bold my-5 mx-5"> Who I'm </h1>
      <div className="row ">
        <div className="col-md-6 col-lg-6 col-sm-12 col-12">
          <div style={{ paddingTop: "121px" }}>
            <img
              className="w-50"
              src="https://i.ibb.co/rHfcqCW/imran-Font-End.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-12">
          <div className="p-3">
            <h1 className="text-start  my-0 py-0 text-white">About Me</h1>
            <hr className="w-25 ms-3 text-warning" />
            <p className="text-start  mt-2  text-white p-2   shadow-lg-3">
              <span className="h5 text-warning"> I am Imran hossain.</span>{" "}
              <span className="h5 text-warning">
                And I'm Frontend developer{" "}
              </span>{" "}
              I am interested in the web development sector. I am working very
              hard for which I am able to master many skills. With my skills I
              am making some projects viz- Developed Website Design. Client-Side
              Development. Database Management Systems,e-commerce site, Mobile
              Application and many different websites. I get to work on a
              variety of interesting things. I am Hard-working web developer
              with a flair for creating elegant solutions in the least amount of
              time. I will apply advanced knowledge as Lead Web Developer with
              Next Generation Web Development.
            </p>
            <div className="d-flex justify-content-start align-items-center">
            <p>
                <a
                  className="text-decoration-none btn resume"
                  href="https://drive.google.com/file/d/1NWtndtUKxUZiKyC6guGBDm-klAmp4c2D/view" target="_blank"
                >
                  Resume
                </a>
              </p>
              <p className="text-start  ms-5">
                <Link to="/contact">
                  <button className="btn hireme">Hire Me</button>
                </Link>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
