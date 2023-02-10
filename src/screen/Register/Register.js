import React, { useState } from "react";
import "./Register.css"

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication here, and show error message if necessary
    if (username !== "admin" || password !== "password") {
      setError("Incorrect username or password");
    } else {
      setError("");
      // Redirect to homepage or show success message
    }
  };

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="assets\p1.jpg" width="100%" />
          </div>
          <div className="col-2">

            <div className="Register-container">
              <form onSubmit={handleSubmit}>
                <h1 className="text-3x1 text-white font-bold my-4">Register</h1>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label htmlFor="email">Email-id:</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label htmlFor="number">Phone no:</label>
                  <input
                    type="integer"
                    id="number
            "
                    value={number
            }
                    onChange={(event) => setNumber
                (event.target.value)}
                  />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;