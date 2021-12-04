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
                    {/* <Link to="/events" style={linkStyle}><li className="item">Dashboard</li></Link> */}
                    <Link to="/dashboard" style={linkStyle}><li className="item">AICTE Activities</li></Link>
                    <Link to="/event-details" style={linkStyle}><li className="item">Event Details</li></Link>
                    <Link to="/create-event" style={linkStyle}><li className="item">Add Event</li></Link>
                    <Link to="/about-us" style={linkStyle}><li className="item">About Us</li></Link>
                    <li className="item searchInput"><input type="search" name="searchBox" id="searchBox" placeholder="Search For Events" /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;