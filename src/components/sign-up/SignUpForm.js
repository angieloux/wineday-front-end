import React, { useState } from "react";
import { useNavigate } from "react-router";
import { parseError } from "../../config/api";
import { useGlobalState } from "../../context/globalContext";
import { signUp } from "../../services/userServices";
import "../log-in/login.styles.scss";
import Layout from "../shared/Layout";

const SignUpForm = () => {
  const { globalDispatch } = useGlobalState();
  const navigate = useNavigate();

  const initialFormData = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(formData)
      .then((response) => {
        globalDispatch({ type: "setLoggedInUser", data: response.username });
        globalDispatch({ type: "setJWT", data: response.jwt });
        navigate("/");
      })
      .catch((error) => {
        const message = parseError(error);
        setErrorMessage(message);
        console.log(message);
      });
  };
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <Layout>
      <div className="sign-up">
        <h1>Register</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={formData.username}
                onChange={handleFormData}
                className="nomad-input email"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                value={formData.email}
                onChange={handleFormData}
                className="nomad-input email"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={formData.password}
                onChange={handleFormData}
                className="nomad-input password"
              />
            </div>
            <div>
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="retype password"
                value={formData.password_confirmation}
                onChange={handleFormData}
                className="nomad-input password"
              />
            </div>
            <div className="submit-btn">
              <button
                className="button is-black nomad-btn submit"
                type="submit"
              >
                Sign up
              </button>
            </div>
            <div className="error-message">
              {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpForm;
