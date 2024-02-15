import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (user.trim() === "" || pass.trim() === "") {
      alert("Enter the Fields");
      return;
    }
    console.log(user);
    console.log(pass);
    setUser("");
    setPass("");
  };

  return (
    <div>
      <div style={{ display: "grid", width: "15%", padding: "50px" }}>
        <label htmlFor="">Login</label>
        <input
          style={{ borderRightColor: "black" }}
          value={user}
          onChange={(event) => setUser(event.target.value)}
          placeholder="enter your name"
        ></input>
      </div>
      <div style={{ display: "grid", width: "15%", padding: "50px" }}>
        <label htmlFor="">Password</label>
        <input
          value={pass}
          style={{ borderRightColor: "black" }}
          placeholder="enter your Password"
          onChange={(event) => setPass(event.target.value)}
        ></input>
      </div>
      <button onClick={login}>Login</button>
      <Link to="/Register">Register</Link>
    </div>
  );
};

export default Login;
