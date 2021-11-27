import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        alert(`The name you entered was: ${userName}`);
        fetch('http://localhost:5000/api/v1/users', {
            method: 'POST',
            body: JSON.stringify({
                user_id: userName,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className="login-register">
            <h2>Register for a new account</h2>
            <form onSubmit={registerUser} method="post">
                <div className="formInput">
                    <label htmlFor="userName">Username</label>
                    <div>
                        <input type="email" name="userName" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                {/* <div className="formInput">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div>
                        <input type="text" name="confirmPassword" id="confirmPassword" />
                    </div>
                </div> */}
                <div className="buttonContainer">
                    <button type="submit" className="registerBtn">Register</button>
                    <span className="loginBtnContainer">
                        <small>Already Registered ?</small>
                        <Link to="/signin"><button className="loginBtn">Login</button></Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Registration;