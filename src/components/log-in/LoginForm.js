import React, { useState } from "react";
import { useGlobalState } from "../../context/globalContext";
import { useNavigate } from "react-router";
import { logInUser } from "../../services/userServices";
import { parseError } from "../../config/api";
import "./login.styles.scss";
import Layout from "../shared/Layout";

export const LoginForm = (props) => {
  const initialValues = {
    login: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const { globalDispatch } = useGlobalState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    logInUser(formValues)
      .then((response) => {
        globalDispatch({
          type: "setLoggedInUserId",
          data: [response.id, response.username],
        });
        // globalDispatch({ type: "setLoggedInUserId", data: response.id });
        globalDispatch({ type: "setJWT", data: response.jwt });
        navigate("/");
      })
      .catch((error) => {
        const message = parseError(error);
        setErrorMessage(message);
        console.log(message);
      });
  }
  return (
    <Layout>
      <div className="log-in">
        <h1>Sign In</h1>
        <div className="form-container">
          <form id="loginForm" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                variant="filled"
                name="login"
                placeholder="email or username"
                value={formValues.login}
                onChange={handleChange}
                className={"nomad-input email"}
              />
            </div>

            <div>
              <input
                type="password"
                variant="filled"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={handleChange}
                className={"nomad-input password"}
              />
            </div>

            <div className="submit-btn">
              <button
                type="submit"
                className="button is-black nomad-btn submit"
              >
                Login
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
