const Registration = () => {

    const registerUser = () => {
        console.log('user');
    }

    return (
        <div className="login-register">
            <h2>Register for a new account</h2>
            <form action={registerUser} method="post">
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
                <div className="formInput">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div>
                        <input type="text" name="confirmPassword" id="confirmPassword" />
                    </div>
                </div>
                <div className="buttonContainer">
                    <button type="submit" className="registerBtn">Register</button>
                    <span className="loginBtnContainer">
                        <small>Already Registered ?</small>
                        <button className="loginBtn">Login</button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Registration;