import React from 'react';
import "./navbar.scss";
import Logo from '../../assets/avatar.jpg';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <p className="logo">TransMonitor</p>
            <div className='search'>
                <i className='fas fa-search icon'></i>
                <input type="text" placeholder='Search...' name="" className='search-text' id=""/>
            </div>
            <div className="nav-links">
                <p className="link">Support</p>
                <p className="link">FAQ</p>
                <i className="link far fa-bell">
                    <div className="notif">
                        8
                    </div>
                </i>
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