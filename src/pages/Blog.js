import React from "react";
import javascript from "../images/javascript.jpg";
import react from "../images/react.png";
import node from "../images/node.png";
import "./Common.css";

const Blog = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-start  my-0 py-0 text-white text-center my-5">
        My Blogs
      </h1>
      <div className="row">
        <div className="col-md-4 col-sm-12 ">
          <div className="bg-dark text-muted blog border rounded">
            <div className="w-100">
              <img className="w-100" src={javascript} alt="" />
            </div>
            <div className="text-start p-3 shadow-3">
              <h3>What is Javascript ? </h3>
              <p>
                18 september{" "}
                <span className="text-danger fw-bold ps-1">imran</span>
              </p>
              <p>
                JavaScript, often abbreviated to JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS. As of 2022, 98% of websites use
                JavaScript on the client side for webpage behavior, often
                incorporating third-party libraries.
              </p>
              <h5>Read More...</h5>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="col-md-4 col-sm-12 ">
          <div className="bg-dark text-muted blog border rounded">
            <div className="w-100">
              <img className="w-100" src={react} alt="" />
            </div>
            <div className="text-start p-3 shadow-3">
              <h3>What is React ? </h3>
              <p>
                18 september
                <span className="text-danger fw-bold ps-1">imran</span>
              </p>
              <p>
                React is a JavaScript library developed by Facebook which, among
                other things, was used to build Instagram.com. Its aim is to
                allow developers to easily create fast user interfaces for
                websites and applications alike. The main concept of React. js
                is virtual DOM
              </p>
              <h5>Read More...</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 ">
          <div className="bg-dark text-muted blog border">
            <div className="w-100">
              <img className="w-100" src={node} alt="" />
            </div>
            <div className="text-start p-3 shadow-3">
              <h3>What is Node js ? </h3>
              <p>
                18 september
                <span className="text-danger fw-bold p-1">imran</span>
              </p>
              <p>
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on a JavaScript Engine and
                executes JavaScript code outside a web browser, which was
                designed to build scalable network applications.
              </p>
              <h5>Read More...</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
