import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <h1 className="logo"><Link to="/">AICTE</Link></h1>
                <ul className="menuItems">
                    <Link to="/"><li className="item">Home</li></Link>
                    <Link to="/current-event"><li className="item">Current Event</li></Link>
                    <Link to="/create-event"><li className="item">Add New Event</li></Link>
                    <li className="item"><input type="search" name="searchBox" id="searchBox" placeholder="Search For Events"/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;