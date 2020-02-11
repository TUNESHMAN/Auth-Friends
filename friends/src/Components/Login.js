import React, { useRef } from "react";
import axios from "axios";

export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submit = () => {
    axios
      .post("http://localhost:7000//api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        // THIS IS THE HAPPY PATH. Credentials are Valid and okay.
        // 1. Put the token string in local storage under a 'token' key
        localStorage.getItem("token", res.data.payload);
        props.history.push('/api/friends');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h1>FORM</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            ref={usernameRef}
            className="form-control"
            id="userName"

          />
          <small className="form-text text-muted">
            We'll never share your details with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            id="pass"
          />
        </div>
        {/* <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button onClick={submit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}


