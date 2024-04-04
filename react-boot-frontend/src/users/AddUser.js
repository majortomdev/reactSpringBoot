import React from "react";

export default function AddUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Please enter your name"
              name="name"
            />
            <label htmlFor="Username" className="form-label">
              UserName
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Choose a username"
              name="username"
            />
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Please enter your email address"
              name="email"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
