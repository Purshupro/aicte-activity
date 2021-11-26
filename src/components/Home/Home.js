import { Link } from 'react-router-dom';

const Home = () => {
  return(
      <div className="mainContainer">
          <h1>Welcome to AICTE</h1>
          
          <Link to="/signin"><button className="loginBtn">Login</button></Link>
          <Link to="/signup"><button className="registerBtn">Register</button></Link>
      </div>
  );
}

export default Home;