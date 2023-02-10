import React, { useState } from "react";
import "./Login.css"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

            <div className="login-container">
              <form onSubmit={handleSubmit}>
                <h1 className="text-3x1 text-white font-bold my-4">Login</h1>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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

export default Login;