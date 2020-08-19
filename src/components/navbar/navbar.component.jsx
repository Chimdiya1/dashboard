import React from 'react';
import "./navbar.scss";
import Logo from '../../assets/avatar.jpg';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <p className="logo">TransMonitor</p>
            <div className='search'>
                <i className='fas fa-search icon'></i>
                <span className='search-text'>Search...</span>
            </div>
            <div className="nav-links">
                <p className="link">Support</p>
                <p className="link">FAQ</p>
                <i className="link far fa-bell"></i>
                <div className="greeting">
                    <p>Hello</p>
                    <p>Oluwaleke Ojo</p>
                </div>
                <img src={Logo} alt="avatar" className="avatar"/>
            </div>
        </div>
     );
}
 
export default Navbar;