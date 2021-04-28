import React, { useState } from "react";
import { Link ,Redirect, useNavigate} from "react-router-dom";
import Login from "./Login";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";
import { notification } from "antd";

const Register = () => {
  const history = useNavigate()
    const [redirect,setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [err, setErr] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
// 
//   const navigate = useNavigate();

  const { name, email, password, password2 } = formData;
  const onChange2 = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password2") {
      if (formData.password !== value) {
        setErr({ ...err, [name]: "PASSWORD DOESN'T MATCH " });
      } else if (formData.password === value) {
        setErr({ ...err, [name]: "" });
      }
    }
  };

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = {
      name: name,
      email: email,
      password: password,
      password: password2,
    };
    try {
      const response = await axios.post(
        "https://ismaila-server.herokuapp.com/api/User",
        data,
        config
      );
      // this is library of antd notification for success registration
      if (response.data.token) {
        notification.success({
          message: "Registration Succesful",
          placement: "bottomRight",
        });
        setRedirect(true);
        //If register navigate to Login
        history('/login')
        // navigate("/login");
      }
      // localStorage.setItem("token", response?.data?.token);
      console.log(response);
      return;
      let decodeduser = decode(response?.data?.token);
      console.log(decodeduser);
    } catch (e) {
      console.log("error ", err);
      notification.warn({
        message: "Something went wrong",
        placement: "bottomRight",
      });
      setRedirect(false);

    }
  };
  if(redirect == true){
  return <Redirect to="/login" />
  }

  return (
    <>
      <div className="form">
        <div className="form-group">
          <h2>Create Your Account </h2>
        </div>

        <form onSubmit={(e) => onSubmit2(e)}>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name || ""}
              required
              onChange={(e) => onChange2(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email || ""}
              required
              onChange={(e) => onChange2(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={formData.password || ""}
              placeholder="Password"
              name="password"
              required
              minLength="5"
              onChange={(e) => onChange2(e)}
            />
          </div>
          <div className="form-group">
            <small style={{ color: "magenta" }}>{err.password2 || ""}</small>
            <label htmlFor="password">ReEnter Password</label>
            <input
              type="password"
              value={formData.password2 || ""}
              placeholder="Confirm Password"
              name="password2"
              minLength="5"
              onChange={(e) => onChange2(e)}
            />
          </div>
          <div className="form">
            <div className="form-group">
              <input type="submit" className="botton" value="Register" />
            </div>
          </div>
        </form>
        <div className="form">
          <div className="form-group">
            <p>
              {" "}
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
