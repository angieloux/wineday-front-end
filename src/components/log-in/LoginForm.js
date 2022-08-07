import React, { useState } from "react";
import { useGlobalState } from "../../context/globalContext";
import { useNavigate } from "react-router";
import { logInUser } from "../../services/userServices";
import { parseError } from "../../config/api";
import "./login.styles.scss";
import Layout from "../shared/Layout";
import { Heading, Form } from "react-bulma-components";

export const LoginForm = (props) => {
  const { Field, Label, Input } = Form;
  const initialValues = {
    login: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const { globalDispatch } = useGlobalState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    setErrorMessage("");
    setLoading(true);
    event.preventDefault();
    logInUser(formValues)
      .then((response) => {
        globalDispatch({
          type: "setLoggedInUser",
          data: [response.id, response.username],
        });
        globalDispatch({ type: "setJWT", data: response.jwt });
        navigate("/");
      })
      .catch((error) => {
        const message = parseError(error);
        setErrorMessage(message);
        console.log(message);
      })
      .finally(() => setLoading(false));
  }
  return (
    <Layout>
      <Heading align="center">Sign In</Heading>

      <Field>
        <form id="loginForm" onSubmit={handleSubmit}>
          <Label for="username">Username or email</Label>
          <Input
            type="text"
            name="login"
            placeholder="email or username"
            value={formValues.login}
            onChange={handleChange}
            className={"nomad-input email"}
          />

          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
            className={"nomad-input password"}
          />

          <div className="submit-btn">
            <button type="submit" className="button is-black nomad-btn submit">
              Login
            </button>
          </div>
          {loading && <p>Checking your details..</p>}
          <div className="error-message">
            {errorMessage && <p>{errorMessage} </p>}
          </div>
        </form>
      </Field>
    </Layout>
  );
};
