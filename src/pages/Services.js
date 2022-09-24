import React from "react";
import "./Common.css";

const Services = () => {
  return (
    <div
      style={{ marginTop: "50px", marginBottom: "100px" }}
      className="serviceBacground"
    >
      <h1 className="text-start  my-0 py-0 text-white text-center my-5">
        Services
      </h1>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card shadow-lg py-2  border card2 rounded">
            <p className="pb-1 pt-4">
              <i class="fa-solid fa-desktop display-4"></i>
            </p>
            <div class="card-body text-start">
              <h5 class="card-title fw-bold">Web Design</h5>
              <p class="card-text">
                Web Design Services I can provide you with a customized website
                design. Which is suitable for your business or personal site. I
                can design the website to match your brand. try for best.
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-lg py-2  card2 border rounded">
            <p className="pb-1 pt-4">
              <i class="fa-solid fa-code display-4"></i>
            </p>
            <div class="card-body text-start">
              <h5 class="card-title fw-bold">Web Development</h5>
              <p class="card-text">
                Considers the complex process of designing an application,
                including website design. Planning, analysis, product design,
                development and implementation, testing, maintenance
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-lg py-2 border card2 rounded">
            <p className="pb-1 pt-4">
              <i class="fa-solid fa-mobile display-4"></i>
            </p>
            <div class="card-body text-start">
              <h5 class="card-title fw-bold"> Responsive design</h5>
              <p class="card-text">
                Responsive web design is a web development method that makes
                dynamic changes in the appearance of a website, depending on the
                screen size and orientation of the device used to view it.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-lg py-2 border card2 rounded">
            <p className="pb-1 pt-4">
              <i class="fa-solid fa-paintbrush display-4"></i>
            </p>
            <div class="card-body text-start">
              <h5 class="card-title fw-bold">Bugs fixing</h5>
              <p class="card-text">
                A bug fix is ​​a system or product change designed to address a
                programming bug/glitch. Different types of programming bugs that
                cause errors with system implementation may require specific bug
                fixes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
