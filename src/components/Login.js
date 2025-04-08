import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
const Login = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: loginData.username,
                    password: loginData.password
                }),
            });
            const data = await response.json();
            console.log(data)
            if (data.success) {
                alert("Login successful!");
                localStorage.setItem("user", JSON.stringify(data.user));
                console.log("User Data:", data.user);
                navigate("/user");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Login failed.");
        }
    };
    

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={loginData.username}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
