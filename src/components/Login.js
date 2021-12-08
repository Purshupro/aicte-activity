import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (e) => {
        e.preventDefault();
        alert(`The name you entered was: ${userName}`);
        fetch('http://localhost:5000/api/v1/login', {
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
            .then((json) => {
                console.log(json)
                alert(json.message);
                window.localStorage.setItem('isLoggedInUser', true);
                // window.location.href = '/dashboard';
            });
    }

    return (
        <div className="login-register">
            <h2>Login to continue</h2>
            <form onSubmit={loginUser} method="post">
                <div className="formInput">
                    <label htmlFor="userName">Username</label>
                    <div>
                        <input type="email" name="userName" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="buttonContainer">
                    <button type="submit" className="loginBtn">Login</button>
                    <span className="loginBtnContainer">
                        <small>New User ?</small>
                        <Link to="/signup"><button className="registerBtn">Register</button></Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Login;