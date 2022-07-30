import React, { useState } from 'react';
// import { Label} from '../styled-components';
import {Button, TextField, Container} from '@mui/material';
import { useGlobalState } from '../config/store';
import { useNavigate } from 'react-router';
import { logInUser } from '../services/userServices';
import { parseError } from '../config/api';

export const LoginForm = (props) => {
    const initialValues = {
        login: "",
        password: "",
    }
    const [formValues, setFormValues] = useState(initialValues)
    const {dispatch} = useGlobalState();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")

    function handleChange(event) {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        logInUser(formValues)
        .then(response => {
            dispatch({type: "setLoggedInUser", data: response.username})
            dispatch({type: "setJWT", data: response.jwt})
            navigate('/')
        })
        .catch(error => {
            const message = parseError(error)
            setErrorMessage(message)
            console.log(message)
        })
    }
    return (
        <div>
            <Container maxWidth="sm">
                
            <h1>Login:</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                
                {/* <Label>Username/email</Label> */}
                <TextField type="text" variant="filled" name="login" placeholder="email or username" value={formValues.login} onChange={handleChange}></TextField>
                
                {/* <Label>Password</Label> */}
                <TextField type="password" variant="filled" name="password" placeholder="password" value={formValues.password} onChange={handleChange}></TextField>
                
                <Button variant="contained" type="submit">Login</Button>
                {errorMessage && (
                    <p className="error">{errorMessage}</p>
                )}
                
            </form>
            </Container>
            
        </div>
    )
}