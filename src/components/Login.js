import { Link } from "react-router-dom";

const Login = () => {

    // const loginUser = () => {
    //     console.log('user');
    // }

    return (
        <div className="login-register">
            <h2>Login to continue</h2>
            <form action="" method="post">
                <div className="formInput">
                    <label htmlFor="userName">Username</label>
                    <div>
                        <input type="email" name="userName" id="userName" />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" name="password" id="password" />
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