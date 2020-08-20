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
                    <p className='content-row'><svg className='icon' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4286 9.00001V4.42858H13H5.57143H2.71429C1.76743 4.42858 1 3.66115 1 2.71429V14.7143C1 15.9766 2.02343 17 3.28571 17H16.4286V12.4286" stroke="#7F8FA4" stroke-miterlimit="10" stroke-linecap="square" />
                        <path d="M18.1429 12.4286H14.1429C13.196 12.4286 12.4286 11.6611 12.4286 10.7143C12.4286 9.76743 13.196 9 14.1429 9H18.1429V12.4286Z" stroke="#7F8FA4" stroke-miterlimit="10" stroke-linecap="square" />
                        <path d="M13 2.14286V1H2.71429C1.76743 1 1 1.76743 1 2.71429C1 3.66114 1.76743 4.42857 2.71429 4.42857" stroke="#7F8FA4" stroke-miterlimit="10" stroke-linecap="square" />
                    </svg>
All Payments</p>
                    <p className='content-row'><svg className='icon' width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4286 9.00001V4.42858H13H5.57143H2.71429C1.76743 4.42858 1 3.66115 1 2.71429V14.7143C1 15.9766 2.02343 17 3.28571 17H16.4286V12.4286" stroke="#647787" stroke-miterlimit="10" stroke-linecap="square" />
                        <path d="M18.1429 12.4286H14.1429C13.196 12.4286 12.4286 11.6611 12.4286 10.7143C12.4286 9.76743 13.196 9 14.1429 9H18.1429V12.4286Z" stroke="#647787" stroke-miterlimit="10" stroke-linecap="square" />
                        <circle cx="12.5" cy="15.5" r="5" fill="white" stroke="#647787" />
                        <path d="M9.75 15.225L11.4 16.875L15.25 14.125" stroke="#647787" />
                        <path d="M13 2.14286V1H2.71429C1.76743 1 1 1.76743 1 2.71429C1 3.66114 1.76743 4.42857 2.71429 4.42857" stroke="#647787" stroke-miterlimit="10" stroke-linecap="square" />
                    </svg>
Reconciled Payments</p>
                    <p className='content-row'><svg className='icon' width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4286 9.00001V4.42858H13H5.57143H2.71429C1.76743 4.42858 1 3.66115 1 2.71429V14.7143C1 15.9766 2.02343 17 3.28571 17H16.4286V12.4286" stroke="#647787" stroke-miterlimit="10" stroke-linecap="square" />
                        <path d="M18.1429 12.4286H14.1429C13.196 12.4286 12.4286 11.6611 12.4286 10.7143C12.4286 9.76743 13.196 9 14.1429 9H18.1429V12.4286Z" stroke="#647787" stroke-miterlimit="10" stroke-linecap="square" />
                        <circle cx="12.5" cy="15.5" r="5" fill="white" stroke="#647787" />
                        <path d="M15.2205 12.7795L9.7793 18.2207" stroke="#647787" />
                        <path d="M15.1909 18.25L9.80911 12.75" stroke="#647787" />
                        <path d="M13 2.14286V1H2.71429C1.76743 1 1 1.76743 1 2.71429C1 3.66114 1.76743 4.42857 2.71429 4.42857" stroke="#647787" stroke-miterlimit="10" stroke-linecap="square" />
                    </svg>
Un - Reconciled Payments</p>
                    <p className='content-row'><svg className='icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z" stroke="#647787" />
                        <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" fill="#647787" />
                    </svg>Manual Settlements</p>
                </div>
                <div className='content-section'>
                    <p className='content-row'>Orders</p>
                    <p className='content-row'><svg className='icon' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.18182 14.0909V1H16.2727V14.0909C16.2727 14.8624 15.9662 15.6024 15.4207 16.1479C14.8751 16.6935 14.1352 17 13.3636 17" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.4545 14.0909H1C1 14.8625 1.30649 15.6024 1.85205 16.1479C2.39761 16.6935 3.13755 17 3.90909 17H13.3636C12.5921 17 11.8522 16.6935 11.3066 16.1479C10.761 15.6024 10.4545 14.8625 10.4545 14.0909Z" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 7.54544H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 7.54544H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9 10.4546H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 10.4546H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9 4.63635H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 4.63635H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9.9914 14.5909C10.0979 15.3094 10.4321 15.9799 10.9515 16.5H3.90909C3.27016 16.5 2.6574 16.2462 2.20561 15.7944C1.87356 15.4623 1.64845 15.0433 1.55245 14.5909H9.9914Z" fill="#647787" stroke="#647787" />
                    </svg>
All Orders</p>
                    <p className='content-row'><svg className='icon' width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.18182 14.0909V1H16.2727V14.0909C16.2727 14.8624 15.9662 15.6024 15.4207 16.1479C14.8751 16.6935 14.1352 17 13.3636 17" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.4545 14.0909H1C1 14.8625 1.30649 15.6024 1.85205 16.1479C2.39761 16.6935 3.13755 17 3.90909 17H13.3636C12.5921 17 11.8522 16.6935 11.3066 16.1479C10.761 15.6024 10.4545 14.8625 10.4545 14.0909Z" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 7.54544H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 7.54544H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9 10.4546H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 10.4546H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9 4.63635H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 4.63635H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9.9914 14.5909C10.0979 15.3094 10.4321 15.9799 10.9515 16.5H3.90909C3.27016 16.5 2.6574 16.2462 2.20561 15.7944C1.87356 15.4623 1.64845 15.0433 1.55245 14.5909H9.9914Z" fill="#647787" stroke="#647787" />
                        <circle cx="15.5" cy="9.5" r="5" fill="white" stroke="#647787" />
                        <path d="M16.875 6.75V12.25" stroke="#647787" stroke-width="0.75" />
                        <path d="M14.125 6.75V12.25" stroke="#647787" stroke-width="0.75" />
                    </svg>
Pending Orders</p>
                    <p className='content-row'><svg className='icon' width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.18182 14.0909V1H16.2727V14.0909C16.2727 14.8624 15.9662 15.6024 15.4207 16.1479C14.8751 16.6935 14.1352 17 13.3636 17" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.4545 14.0909H1C1 14.8625 1.30649 15.6024 1.85205 16.1479C2.39761 16.6935 3.13755 17 3.90909 17H13.3636C12.5921 17 11.8522 16.6935 11.3066 16.1479C10.761 15.6024 10.4545 14.8625 10.4545 14.0909Z" stroke="#647787" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 7.54546H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 7.54546H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9 10.4545H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 10.4545H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9 4.63637H13.3636" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M6.09088 4.63637H7.54543" stroke="#647787" stroke-miterlimit="10" stroke-linejoin="round" />
                        <path d="M9.9914 14.5909C10.0979 15.3094 10.4321 15.9799 10.9515 16.5H3.90909C3.27016 16.5 2.6574 16.2462 2.20561 15.7944C1.87356 15.4623 1.64845 15.0433 1.55245 14.5909H9.9914Z" fill="#647787" stroke="#647787" />
                        <circle cx="16.5" cy="9.5" r="5" fill="white" stroke="#647787" />
                        <path d="M13.75 9.225L15.4 10.875L19.25 8.125" stroke="#647787" />
                    </svg>
                    Reconciled Orders</p>
                </div>
                <div className='content-section'>
                    <p className='content-row'>
                        <svg className='icon' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.27272 9C6.26472 9 4.63635 7.37164 4.63635 5.36364V4.63636C4.63635 2.62836 6.26472 1 8.27272 1C10.2807 1 11.9091 2.62836 11.9091 4.63636V5.36364C11.9091 7.37164 10.2807 9 8.27272 9Z" stroke="#647787" stroke-miterlimit="10" stroke-linecap="square" />
                        <path d="M15.5455 15.4785C15.5455 14.1695 14.6749 13.0182 13.4116 12.6742C12.0342 12.2982 10.1535 11.9091 8.27273 11.9091C6.392 11.9091 4.51127 12.2982 3.13382 12.6742C1.87055 13.0182 1 14.1695 1 15.4785V17H15.5455V15.4785Z" stroke="#647787" stroke-miterlimit="10" stroke-linecap="square" />
                        </svg>
                        Merchant Profile
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Sidebar;