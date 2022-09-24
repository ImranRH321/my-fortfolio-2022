import React from "react";
import "./Common.css";
import 'animate.css';

const Skill = () => {
  return (
    <div className="  vh-50 d-flex p-4 skillBg">
      <div class="container my-auto">
        <h1 className="text-start  my-0 py-0 text-white text-center pt-5">My Skill</h1>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3 mt-5 ">
          {/* js */}
          <div class="col">
            <div class="p-3 text-warning style">
              <p>
                <i class="fa-brands fa-square-js display-1"></i>{" "}
              </p>{" "}
              <p> Javascript</p>
            </div>
          </div>
          {/* react  */}
          <div class="col">
            <div class="p-3 text-warning style">
              <p>
                <i class="fa-brands fa-react display-1"></i>
              </p>{" "}
              <p> React</p>
            </div>
          </div>
          {/* node  */}
          <div class="col">
            <div class="p-3 text-warning style">
              <p>
                <i class="fa-brands fa-node display-1"></i>
              </p>{" "}
              <p> Node JS</p>
            </div>
          </div>
          {/* Express */}
          <div class="col">
            <div class="style" style={{ width: "69px", height: "80px" }} className="mx-auto">
              <img
                className="w-100"
                src="https://i.ibb.co/4PRXM3q/express-Logo.png"
                alt="express img not found"
              />
            </div>
            <p className="mt-3 style"> Express js</p>
          </div>
          {/* mongodb */}
          <div class="col">
            <div style={{ width: "69px", height: "80px" }} className="mx-auto style">
              <img
                className="w-100 rounded"
                src="https://i.ibb.co/gtvy68V/mongodb.png"
                alt="express img not found"
              />
            </div>
            <p className="mt-3 style">MongoDb</p>
          </div>
          {/* twailwind */}
          <div class="col">
            <div class="p-3 style">
              <div
                style={{ width: "69px", height: "80px" }}
                className="mx-auto"
              >
                <img
                  className="w-100 rounded"
                  src="https://i.ibb.co/gMJRx3m/twailwind-Css.png"
                  alt="tailwind img not found"
                />
              </div>
              <p className="mt-1"> TAILWIND css</p>
            </div>
          </div>
          {/* 
          
          https://i.ibb.co/4PRXM3q/express-Logo.png
https://i.ibb.co/gtvy68V/mongodb.png
https://i.ibb.co/WFTdJhc/react-bootstrap.png
https://i.ibb.co/gMJRx3m/twailwind-Css.png
          */}
          {/* react bootstrap */}
          <div class="col">
            <div class="p-3 text-warning style">
              <div
                style={{ width: "69px", height: "80px" }}
                className="mx-auto"
              >
                <img
                  className="w-100 rounded"
                  src="https://i.ibb.co/WFTdJhc/react-bootstrap.png"
                  alt="tailwind img not found"
                />
              </div>
              <p className="mt-1"> React Boostrap</p>
            </div>
          </div>
          {/*  BOOTSTRAP*/}
          <div class="col">
            <div class="p-3 text-warning style">
              <p>
                <i class="fa-brands fa-bootstrap display-1"></i>
                {/*  BOOTSTRAP icon now */}
              </p>{" "}
              <p> BOOTSTRAP</p>
            </div>
          </div>
          {/*  css*/}
          <div class="col">
            <div class="p-3 text-warning style">
              <p>
                <i class="fa-brands fa-css3-alt display-1"></i>
                {/*  Css icon now */}
              </p>{" "}
              <p> CSS</p>
            </div>
          </div>
          {/*  html*/}
          <div class="col">
            <div class="p-3 text-warning style">
              <p>
                <i class="fa-brands fa-html5 display-1"></i>
                {/*  html icon now */}
              </p>{" "}
              <p> HTML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
