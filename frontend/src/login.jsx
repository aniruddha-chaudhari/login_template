import "./LoginAndSignup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/auth/login", {
            username: username,
            password: password
        })
        .then(response => {
            const token = response.data.token;
            navigate('/profile');
            localStorage.setItem('token', token);
            verifyToken(token); // Call verifyToken after successful login
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
    };

    const verifyToken = (token) => {
        axios.get('http://localhost:3000/auth/verifyToken', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const { username, email } = response.data;
            setUserInfo({ username, email });
            console.log('Username:', username);
            console.log('Email:', email);
            // You can also use the username and email as needed
        })
        .catch(error => {
            console.error('Error verifying token:', error);
        });
    }

    return (
        <div>
            <div className="background"></div>
            <div className="centering">
                <form className="my-form">
                    <div className="login-welcome-row">
                        <h1>Log In!</h1>
                    </div>
                    <div className="text-field">
                        <label htmlFor="username">Username:</label>
                        <input
                            aria-label="Username"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Your Username"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="Username Icon" />
                    </div>
                    <div className="text-field">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            aria-label="Password"
                            name="password"
                            placeholder="Your Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/login-password-3.png" alt="Password Icon" />
                    </div>
                    <input type="submit" className="my-form__button" value="Login" onClick={handleSubmit} />
                    <div className="my-form__actions">
                        <div className="my-form__row">
                            <span>Did you forget your password?</span>
                            <a href="#" title="Reset Password">Reset Password</a>
                        </div>
                        <div className="my-form__signup">
                            <a href="signup" title="Create Account">Create Account</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;