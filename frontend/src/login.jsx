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
                    {/* ... */}
                </form>
            </div>
        </div>
    );
}

export default Login;