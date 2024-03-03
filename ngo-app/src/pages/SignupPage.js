import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../utils/AuthContext";

export default function SignupPage() {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleOnChange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value);
        } else if (e.target.name == 'username') {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }
    const handleError = (err) => {
        console.log(err);
        toast.error(err, {
            position: "bottom-left",
        });
    }
    const handleSuccess = (msg) => {
        console.log(msg);
        toast.success(msg, {
            position: "bottom-right",
        });
        login();
    }
    
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(
                "http://localhost:4000/volunteerSignup",
                {
                    email: email,
                    username: username,
                    password: password
                },
                { withCredentials: true }
            );
            const { success, message } = data.data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit">Sign Up</button>
                <span>
                    Already have an account? <Link to={"/login"}>Log In</Link>
                </span>
                <ToastContainer />
            </form>
        </>
    )
}