import React, { useState, useContext } from "react";
import { Link, Redirect,useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
import AuthContext from "../../context/AuthContext";

const Login = () => {

  const auth = useContext(AuthContext);
  let navigate = useNavigate();
  // const history = useHistory();
  const [redirect,setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const { email, password } = formData;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let formValid = true;
    // client side validation using javascript regular expression and state variable to set error messages.
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "") {
      formValid = false;
      setEmailError("Please Enter email");
    } else if (!email.match(emailPattern)) {
      formValid = false;
      setEmailError("Please Enter email in valid format");
    } else {
      formValid = true;
      setEmailError("");
    }

    if (formValid) {
      setIsLoading(true);
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let data = {
        email: email,
        password: password,
      };

      if (password == "") {
        formValid = false;
        setEmailError("Please Enter password");
      }

      try {
        const response = await axios.post( 
          "https://ismaila-server.herokuapp.com/api/auth",
          data,
          config
        );
        console.log(response);
                  setRedirect(true);
        setIsLoading(false);
        setError(null);

        // If we get the token then we rredirect to another page
        if (response.data.token) {
          notification.success({
            message: "Login Succesful",
            placement: "bottomRight",
          });
          localStorage.setItem("token", response.data.token);
          console.log(redirect,'redirect')

        }
        auth.login();
                setRedirect(true);

        navigate("/");
      } catch (err) {
        notification.error({
          message: "Something went wrong",
          placement: "bottomRight",
        });
        setRedirect(false);
        setIsLoading(false);
         localStorage.setItem("token", data.token);
        //   console.log(err.response.data.errors);
        //   setError(err.response.data.errors[0].msg);
      }
    }
  };
  if(redirect == true){
    return <Redirect to="/"/>
  }

  return (
    <>
      <div className="base-container">
        <h2>Job Site User Login</h2>
        {isLoading && <p style={{ color: "red" }}>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={(e) => onSubmit2(e)}>
          <div className="image">
            <img
              src={"https://cdn.hipwallpaper.com/i/62/26/HKoPzd.jpg"}
              height="200px"
            />
          </div>
          <div className="form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange2(e)}
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            </div>
          </div>
          <div className="form">
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                minLength="5"
                onChange={(e) => onChange2(e)}
              />
            </div>
          </div>
          <div className="form">
            <div className="form-group">
              <input type="submit" className="botton" value="Login" />{" "}
            </div>{" "}
          </div>
        </form>
        <div className="form">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>{" "}
        </div>
      </div>
    </>
  );
};

export default Login;
