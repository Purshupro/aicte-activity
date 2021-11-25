const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <h1 className="logo">AICTE</h1>
                <ul className="menuItems">
                    <li className="item"><a href="/">Home</a></li>
                    <li className="item"><a href="/current-event">Current Event</a></li>
                    <li className="item"><a href="/create-event">Add New Event</a></li>
                    <li className="item"><input type="search" name="searchBox" id="searchBox" placeholder="Search For Events"/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;