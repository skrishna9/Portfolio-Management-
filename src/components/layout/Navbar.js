import React from "react";
import {Link,NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand ">Portfolio Management</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-end mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-center"  exact to="/">Stocks</NavLink>
                        </li>
                    </ul>
                    
                </div>
                <Link className="btn btn-outline-light"  to="/addstocks">AddStock</Link>
            </div>
        </nav>
    )
}

export default Navbar;