import React, { useState } from "react";
import { useNavigate } from "react-router";
import { parseError } from "../../config/api";
import { useGlobalState } from "../../context/globalContext";
import { signUp } from "../../services/userServices";
import "../log-in/login.styles.scss";
import Layout from "../shared/Layout";
import { Heading, Form } from "react-bulma-components";

const SignUpForm = () => {
  const { Field, Label, Input } = Form;
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);
    signUp(formData)
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
  };
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <Layout>
      <Heading align="center">Register</Heading>
      <Field>
        <form onSubmit={handleSubmit}>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={formData.username}
            onChange={handleFormData}
            className="nomad-input email"
          />
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={formData.email}
            onChange={handleFormData}
            className="nomad-input email"
          />

          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={formData.password}
            onChange={handleFormData}
            className="nomad-input password"
          />
          <Label for="password_confirmation">Retype your password</Label>
          <Input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="retype password"
            value={formData.password_confirmation}
            onChange={handleFormData}
            className="nomad-input password"
          />

          <div className="submit-btn">
            <button className="button is-black nomad-btn submit" type="submit">
              Sign up
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

export default SignUpForm;
