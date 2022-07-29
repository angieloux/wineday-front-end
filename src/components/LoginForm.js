import React, { useState } from 'react';
// import { Label} from '../styled-components';
import {Button, TextField, Container} from '@mui/material';
import { useGlobalState } from '../config/store';
import { useNavigate } from 'react-router';
import { logInUser } from '../services/userServices';

export const LoginForm = (props) => {
    const initialValues = {
        email: "",
        password: "",
    }
    const [formValues, setFormValues] = useState(initialValues)
    const {dispatch} = useGlobalState();
    const navigate = useNavigate();

    function handleChange(event) {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        logInUser(formValues)
        .then(email => {
            dispatch({type: "setLoggedInUser", data: email})
            navigate('/')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Container maxWidth="sm">
            <h1>Login:</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                
                {/* <Label>Username/email</Label> */}
                <TextField type="email" variant="filled" name="email" placeholder="email" value={formValues.email} onChange={handleChange}></TextField>
                
                {/* <Label>Password</Label> */}
                <TextField type="password" variant="filled" name="password" placeholder="password" value={formValues.password} onChange={handleChange}></TextField>
                
                <Button variant="contained" type="submit">Login</Button>
                
            </form>
            </Container>
            
        </div>
    )
}