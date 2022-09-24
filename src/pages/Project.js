import React from "react";
import "./Project.css";
import manufacture1 from "../images/manufacture1.png";
import shoping1 from "../images/shoping2.png";
import curhouse from "../images/carwarehouse1.png";
import customer from "../images/customer1.png";
import indefinite from "../images/indefinet1.png";
import convention from "../images/convention1.png";

const Project = () => {
  return (
    <div className="project">
      <h1 className="text-start  my-0 py-0 text-white text-center my-5">
        Project
      </h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {/* project manufacture website 1 */}
        <div class="col">
          <div class="card newCard">
            <div className="inner">
              <img
                height="350"
                src={manufacture1}
                class="card-img-top project_1"
                alt="..."
              />
            </div>
            <div class="card-body card-body2 mx-auto">
              <div className="d-flex ">
                <p class="card-title mx-2 bg-success rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-white"
                     href="https://assignment12-32047.web.app/" 
                      target="_blank"
                  >
                    Live
                  </a>
                </p>
                <p class="card-title mx-2 bg-warning rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-dark fw-bold"
                    href=" https://github.com/ImranRH321/-manufacturer-website-client-side_12"
                    target="_blank"
                 >
                    Client_side
                  </a>
                </p>
                <p class="card-title mx-2 bg-info rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-dark fw-bold"
                    href=" https://github.com/ImranRH321/-manufacturer-website-server-12"
                    target="_blank"
                  >
                    Server_side
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* project shopping website 2 */}
        <div class="col">
          <div class="card newCard">
            <div className="inner">
              <img
                height="350"
                src={shoping1}
                class="card-img-top project_1"
                alt="..."
              />
            </div>
            <div class="card-body card-body2 mx-auto">
              <div className="d-flex ">
                <p class="card-title mx-2 bg-success fw-bold rounded  py-1 px-2 ">
                  <a
                    className="text-decoration-none text-white"
                    href="https://laptop-shorom-imranrx.web.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </p>
                <p class="card-title mx-2 bg-warning rounded py-1  px-2 ">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://github.com/ImranRH321/simple-laptop_Client"
                    target="_blank"
                >
                    Client_side
                  </a>
                </p>
                <p class="card-title mx-2 bg-info rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://github.com/ImranRH321/simple-Laptop_Server"
                    target="_blank"
                  >
                    Server_side
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* project car house website 3 */}
        <div class="col">
          <div class="card newCard">
            <div className="inner">
              <img
                height="350"
                src={curhouse}
                class="card-img-top project_1"
                alt="..."
              />
            </div>
            <div class="card-body card-body2 mx-auto">
              <div className="d-flex ">
                <p class="card-title mx-2 bg-success rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-white fw-bold"
                    href="https://carwarehouse-a72b1.web.app/"
                    target="_blank"                  >
                    Live
                  </a>
                </p>
                <p class="card-title mx-2 bg-warning rounded fw-bold py-1 px-2 ">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://github.com/ImranRH321/-warehouse-management-client-side_11"
                    target="_blank"
                  >
                    Client_side
                  </a>
                </p>
                <p class="card-title mx-2 bg-info rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://github.com/ImranRH321/-warehouse-management-server-side_11"
                    target="_blank"
                  >
                    Server_side
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* project customer assignment-9 website 4 */}
        <div class="col">
          <div class="card newCard">
            <div className="inner">
              <img
                height="350"
                src={customer}
                class="card-img-top project_1"
                alt="..."
              />
            </div>
            <div class="card-body card-body2 mx-auto">
              <div className="d-flex ">
                <p class="card-title mx-2 fw-bold bg-success rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-white "
                    href="https://product-review-marker.netlify.app/"
                    target="_blank"
                 >
                    Live
                  </a>
                </p>
                <p class="card-title mx-2 bg-warning fw-bold rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://github.com/ImranRH321/Assignment-9"
                    target="_blank"
                  >
                    Client_side
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* project indefinite website 5 */}
        <div class="col">
          <div class="card newCard">
            <div className="inner">
              <img
                height="350"
                src={indefinite}
                class="card-img-top project_1"
                alt="..."
              />
            </div>
            <div class="card-body card-body2 mx-auto">
              <div className="d-flex ">
                <p class="card-title mx-2 bg-success fw-bold rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-white"
                    href="https://gleeful-nougat-fc75a5.netlify.app/"
                    target="_blank"
                >
                    Live
                  </a>
                </p>
                <p class="card-title mx-2 bg-warning rounded fw-bold py-1 px-2 ">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://github.com/ImranRH321/-independent-service-10"
                    target="_blank"
                  >
                    Client_side
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* project convention website 6 */}
        <div class="col">
          <div class="card newCard">
            <div className="inner">
              <img
                height="350"
                src={convention}
                class="card-img-top project_1"
                alt="..."
              />
            </div>
            <div class="card-body card-body2 mx-auto">
              <div className="d-flex ">
                <p class="card-title mx-2 bg-success fw-bold rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-white"
                    href="https://convenstion.netlify.app/"
                    target="_blank"
                 >
                    Live
                  </a>
                </p>
                <p class="card-title mx-2 bg-warning rounded py-1 px-2 ">
                  <a
                    className="text-decoration-none text-dark"
                    href="https://github.com/ImranRH321/web-assignment-3-bootstap-site"
                    target="_blank"
                  >
                    Client_side
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
