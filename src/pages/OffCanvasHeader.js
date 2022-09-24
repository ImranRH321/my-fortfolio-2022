import React from "react";
import { Link } from "react-router-dom";
import "./Contact";

const OffCanvasHeader = () => {
  return (
    <div className="">
      <div class="fixed-top  text-end p-3">
        <a
          class="btn  text-warning bg-dark"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <i class="fa-solid fa-bars h5"></i>
        </a>
      </div>

      <div
        class="offcanvas offcanvas-start bg-dark sideBar"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          {/* <h5 class="offcanvas-title " id="offcanvasExampleLabel">
            Imran hossain
          </h5> */}
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="top_section">
            <div>
              <img
                className="w-50"
                src="https://i.ibb.co/rHfcqCW/imran-Font-End.png"
                alt=""
              />
            </div>
            {/* Social link start */}
            <div className="my-3">
              {/* Linkedin */}
              <span className="mx-3 h3 text-white">
                <a
                  className="text-decoration-none "
                  href="https://www.linkedin.com/in/imran1web/"
                  rel="refer"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </span>
              {/* Githup */}
              <span className="mx-3 h3">
                <a
                  className="text-decoration-none "
                  href="https://github.com/ImranRH321"
                  rel="refer"
                  target="_blank"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>
              {/* Facebook */}
              <span className="mx-3 h3">
                <a
                  className="text-decoration-none "
                  href="https://www.facebook.com/profile.php?id=100069635677801https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069635677801"
                  rel="refer"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </span>
              {/* <hr  className="hr text-center w-50 mx-auto text-danger h-0 span"/> */}
            </div>
            {/* Social link End */}
          </div>
          <div class="dropdown mt-3 w-50 text-start mx-auto shadow-3">
            {/* deference Link here all now  */}
            <ul className="list-unstyled ">
              <li className="text-start  fw-bold fs-6  my-3 ">
                <Link className="text-start text-decoration-none a" to="/home">
                  <i class="mx-3 fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="text-start  fw-bold fs-6  my-3 ">
                <Link className="text-start text-decoration-none a" to="/about">
                  <i class="mx-3 fa-solid fa-user"></i> About
                </Link>
              </li>
              <li className="text-start  fw-bold fs-6  my-3 ">
                <Link className="text-start text-decoration-none a" to="/skill">
                  <i class="mx-3 fa-solid fa-fill-drip"></i> Skill
                </Link>
              </li>
              <li className="text-start  fw-bold fs-6  my-3 ">
                <Link
                  className="text-start text-decoration-none a"
                  to="/project"
                >
                  <i class="mx-3 fa-solid fa-list-check"></i> Project
                </Link>
              </li>
              <li className="text-start  fw-bold fs-6  my-3 ">
                <Link
                  className="text-start text-decoration-none a"
                  to="/services"
                >
                  <i class="mx-3 fa-brands fa-servicestack"></i>
                  Services
                </Link>
              </li>
              <li className="text-start  fw-bold fs-6  my-3 ">
                <Link className="text-start text-decoration-none a" to="/blog">
                  <i class="mx-3 fa-solid fa-address-book"></i> Blogs
                </Link>
              </li>
              <li className="text-start  fw-bold fs-6  my-3 ">
                <Link
                  className="text-start text-decoration-none a"
                  to="/contact"
                >
                  <i class="mx-3 fa-solid fa-address-book"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasHeader;
