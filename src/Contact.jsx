import React, { useState } from "react";

export const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    mnumber: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target.value;
    setData((preVal) => {
      return {
        ...preVal
        [name], value,
      }
    })
  }


  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fname} . My Mobile Number is ${data.mnumber} . My Email id is ${data.email}. My Message is ${data.msg}`
    );
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  value={data.fname}
                  onChange={InputEvent}
                  required
                  placeholder="Full Name"
                  name="fname"
                  type="text"
                  autoComplete="off"
                  htmlFor=""
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Mobile Number
                </label>
                <input
                  value={data.mnumber}
                  onChange={InputEvent}
                  required
                  placeholder="Enter Mobile Number"
                  name="mnumber"
                  type="number"
                  autoComplete="off"
                  htmlFor=""
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  required
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Email ID"
                  name="email"
                  type="email"
                  autoComplete="off"
                  htmlFor=""
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <textarea
                  required
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Enter some message here.."
                  name="msg"
                  autoComplete="off"
                  htmlFor=""
                  className="form-control"
                  id="exampleInputPassword1">
                </textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
