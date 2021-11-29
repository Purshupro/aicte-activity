import { Link } from "react-router-dom";

const Navbar = () => {
    const linkStyle = {
        textDecoration: "none",
        color: 'white'
    };

    return (
        <nav className="navbar">
            <div className="navContainer">
                <div className="logo_container">
                <h1 className="logo"><Link to="/" style={linkStyle}>AICTE</Link></h1>
                 <small>Jyothinivas College</small> <br />
                 <small>Bengaluru</small>   
                </div>
                <ul className="menuItems">
                    <Link to="/" style={linkStyle}><li className="item">Home</li></Link>
                    <Link to="/events" style={linkStyle}><li className="item">AICTE Activities</li></Link>
                    <Link to="/current-event-details" style={linkStyle}><li className="item">Current Event Details</li></Link>
                    <Link to="/create-event" style={linkStyle}><li className="item">Add Upcoming Event</li></Link>
                    <li className="item searchInput"><input type="search" name="searchBox" id="searchBox" placeholder="Search For Events" /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;