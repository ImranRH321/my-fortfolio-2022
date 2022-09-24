import React from "react";
import { Typewriter } from "react-simple-typewriter";
import './Banner.css'
import 'animate.css';

const Banner = () => {
  return (
    <div className="vh-75 d-flex justify-content-center align-items-center Background">
      <div className="row g-5">
        <div className="col-md-6">
          <img className="rounded-pill" src="" alt="" />
        </div>
        <div className="col-md-12 cols-sm-12 p-5">
          <h3 className="animate__animated animate__bounce animate__bounceInRight bg- rounded display-4  ">This is <span className="text-color">Imran Hossain</span></h3>
         
          <div className="App">
            <h1
              style={{
                paddingTop: "5rem",
                // margin: "auto 0",
                fontWeight: "normal",
              }}
            >
             
              <span style={{ background: "black",fontFamily: 'sans-serif', fontSize:"40px",padding: '5px', color: "orange", fontWeight: "300" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "I am  Frontend Developer ❤",
                     "I have  Experience for 1 year",
                     "I have done many project",
                     "I love codding" 
                  ]}
                  loop={100}
                  cursor
                  cursorStyle="/"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={500}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </span>
            </h1>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
