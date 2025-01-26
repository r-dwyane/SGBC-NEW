import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsername = "admin";
    const validPassword = "admin123";

    if (username === validUsername && password === validPassword) {
      setErrorMessage("");
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="mother-div">
        <div className="login-container">
        <h3>Admin.</h3>
        <img src="/samgyeopsal 3.svg" alt="Icon" className="image-1" />
        <div className="container">
            <h1>Welcome back, Admin!</h1>
            <form onSubmit={handleLogin}>
            <div className="form-group">
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                <label>Username:</label>
            </div>
            <div className="form-group">
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <label>Password:</label>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Login</button>
            </form>
        </div>
        <img src="/samgyeopsal 3.svg" alt="Icon" className="image-2" />
        </div>
    </div>
  );
};

export default Login;
