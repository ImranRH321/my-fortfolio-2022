import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import "./Common.css";

const Contact = () => {
  const form = useRef();

  const [show, setshow] = useState(null);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ci8518f",
        "template_c5ph1rw",
        form.current,
        "EcCU98W9Zlk96h4d8"
      )
      .then(
        result => {
          console.log(result.text);
          console.log("message send");
          setshow("Thanks for message ");
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className=" ">
      <h1 className="text-center fw-bold text-white py-5">Contact Me</h1>
      <hr className="text-center mx-auto w-50" />
      <div className="row">
        <div className="col-md-6 ">
          <div className="text-start w-50 mx-auto mt-4">
            <h1 className="text-black font-bold shadow-3">Get in Touch</h1>
            <hr />
            <div className="d-flex  align-items-center">
              <div>
                <i class=" h2 fa-regular fa-user text-danger p-3 rounded"></i>
              </div>
              <div>
                <h5>Name</h5>
                <p>Imran Hossain </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <i class="h2 fa-solid fa-location-dot text-danger p-3 rounded"></i>
              </div>
              <div>
                <h5>Location</h5>
                <p>Comilla Bangladesh</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <i class=" h2 text-danger fa-solid fa-envelope p-3 rounded"></i>
              </div>
              <div>
                <h5>Email</h5>
                <p>imranrh247@gmail.com </p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <i class="h2 fa-solid fa-phone text-danger p-3 rounded"></i>
              </div>
              <div>
                <h5>Phone</h5>
                <p>019747007022 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="fs-3 text-center mt-5"></h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="px-5">
              <div className="text-start">
                <label className="small text-warning">Name</label>
                <input class="form-control" type="text" name="user_name" required placeholder="Name"/>
              </div>
              <div className="text-start">
                <label className="small text-warning">Email</label>
                <input
                  class="form-control"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  req
                />
              </div>
              <div className="text-start">
                <label className="small text-warning">Message</label>
                <textarea
                  ols="30"
                  rows="4"
                  class="form-control"
                  name="message"
                  required
                  placeholder="message for Imran."
                />
                <input
                  className="btn btn-info px-3 mt-2"
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
          <p class="text-success fs-2 fw-bold">{show}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
