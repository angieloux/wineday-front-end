import React, { useState } from 'react';
// import { Label} from '../styled-components';
import {Button, TextField, Container} from '@mui/material';

export const LoginForm = (props) => {
    const initialState = {
        username: "",
        password: "",
    }
    const [formState, setFormState] = useState(initialState)

    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState)
    }
    return (
        <div>
            <Container maxWidth="sm">
            <h1>Login:</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                
                {/* <Label>Username/email</Label> */}
                <TextField variant="filled" name="username" placeholder="username or email" value={formState.username} onChange={handleChange}></TextField>
                
                {/* <Label>Password</Label> */}
                <TextField variant="filled" name="password" placeholder="password" value={formState.password} onChange={handleChange}></TextField>
                
                <Button variant="contained" type="submit">Login</Button>
                
            </form>
            </Container>
            
        </div>
    )
}