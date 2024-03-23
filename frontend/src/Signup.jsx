import "./LoginAndSignup.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState(""); // Add this line
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Assuming you have declared email, password, and username as useState variables
        axios.post("http://localhost:3000/user/signup", {
            email: email,
            password: password,
            username: username
        })
        .then(response => {
            // Handle successful response
            navigate('/login');
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error occurred:', error);
            if (error.response && error.response.status === 401) {
                setError('Fill all details');
            } else {
                setError('An error occurred during signup. Please try again later.');
            }
        });
    };
    

    return (
      <div >
        <div class="background"></div>
        <div class="centering">
            <form class="my-form"  onSubmit={handleSubmit}>
                <div class="login-welcome-row">
                    {/* <img
                        class="login-welcome"
                        src="https://cie.spacefoundation.org/wp-content/uploads/2022/07/Astronaut.jpg"
                        alt="Astronaut"
                    /> */}
                    <h1>Sign Up!</h1>
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
                <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png"></img>
            </div>
                <div class="text-field">
                    <label for="email" >Email:</label>
                    <input
                        aria-label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <img
                        alt="Email Icon"
                        title="Email Icon"
                        src="https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png"
                    />
                </div>
                <div class="text-field">
                    <label for="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        aria-label="Password"
                        name="password"
                        placeholder="Create Password"
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <img
                        alt="Password Icon"
                        title="Password Icon"
                        src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/login-password-3.png"
                    />
                </div>
                <input type="submit" class="my-form__button" value="Create Account" />
                <div class="my-form__actions">
                    <div class="my-form__signup">
                        <a href="/login" title="Create Account">Already have an Account?</a>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
}

export default Signup;
