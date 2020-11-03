import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { login } from "../utils/login";
import UserContext from "../utils/UserContext";

export default function Login() {

  const [loginError, setLoginError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  let history = useHistory();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loggedInUser = await login(userName, password)
      console.log(loggedInUser);
      if (loggedInUser) {
        setUser(loggedInUser);
        history.push("/home");
        } else {
          setLoginError(true);
        }

    } catch(err) {
      console.log(err);
    }
   
      
  };
    return (
      <>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header"></div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Login Form</h2>
              <form className="login" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-input"
                    placeholder="Email"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password-input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="btn btn-default">
                  Login
                </Button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </>
    );
}
