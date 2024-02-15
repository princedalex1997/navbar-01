import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigation = useNavigate();

  const register = () => {
    if (name.trim() === "" || email.trim() === "" || pass.trim() === "") {
      alert("Fill all the things");
      return;
    }
    const Users = {
      name: name,
      email: email,
      password: pass,
    };

    axios
      .post("http://localhost:3000/register", Users)
      .then(() => {
        alert("Registration Was SuccessFully");
        console.log("Added");
        setEmail("");
        setName("");
        setPass("");
        navigation("/Login");
      })
      .catch((err) => {
        alert("Not Added");
        console.log("Not Added");
       
      });
  };
  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input
          placeholder="Enter u r name"
          onChange={(event) => setName(event.target.value)}
          required
          value={name}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          placeholder="Enter u r email"
          onChange={(event) => setEmail(event.target.value)}
          required
          value={email}
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          placeholder="Enter u r Password"
          onChange={(event) => setPass(event.target.value)}
          required
          value={pass}
        />
      </div>
      <button onClick={register}>Register</button>

      <Link to="/login">Login Page</Link>
    </div>
  );
};

export default Register;
