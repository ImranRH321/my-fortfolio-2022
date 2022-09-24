import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5">
      <div className="p-5">
        <div className="my-3">
          {/* Linkedin */}
          <span className="mx-3 h3">
            <a
              className="text-decoration-none "
              href="https://www.linkedin.com/in/imran1web/"
              rel="refer"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin text-warning"></i>
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
              <i class="fa-brands fa-github text-warning"></i>
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
              <i class="fa-brands fa-facebook text-warning"></i>
            </a>
          </span>
        </div>
        <p className="text-white">
          Copyright © 2022{" "}
          <span className="text-success fs-6 fw-bold">
          ❤️ Imran Hossain <span className="fs-3">👨‍💻</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
