import React from 'react';
import "./sidebar.scss";
import Overview from '../../assets/overview.png';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <button className='generate-invoice'>
                GENERATE INVOICE
            </button>
            <div className="sidebar-content">
                <div className='content-section'>
                    <p className='content-row'>Main</p>
                    <p className='content-row overview'><img className="icon" src={Overview} alt="" /> Overview</p>
                </div>
                <div className='content-section'>
                    <p className='content-row'>Payments</p>
                    <p className='content-row'><img className="icon" src={Overview} alt="" />All Payments</p>
                    <p className='content-row'><img className="icon" src={Overview} alt="" />Reconciled Payments</p>
                    <p className='content-row'><img className="icon" src={Overview} alt="" />Un - Reconciled Payments</p>
                    <p className='content-row'><img className="icon" src={Overview} alt="" />Manual Settlements</p>
                </div>
                <div className='content-section'>
                    <p className='content-row'>Orders</p>
                    <p className='content-row'><img className="icon" src={Overview} alt="" />All Orders</p>
                    <p className='content-row'><img className="icon" src={Overview} alt="" />Pending Orders</p>
                    <p className='content-row'><img className="icon" src={Overview} alt="" />Reconciled Orders</p>
                </div>
                <div className='content-section'>
                    <p className='content-row'><img className="icon" src={Overview} alt="" />Merchant Profile</p>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default Sidebar;