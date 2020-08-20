import React from 'react'

const OrderDetails = ({ pending, reconciled, total }) => {
    const reconciledPercent = (reconciled/total) * 100
    const hrStyle = {
        height: '4px',
        border: 'none',
        borderRadius: '120px',
        background: `linear-gradient(to right, green 0% ${reconciledPercent}%, yellow ${reconciledPercent}% 100%)`,
        marginBottom: '11px'
    }
    return ( 
        <div>
            <h3>Orders</h3>
            <hr style={hrStyle}></hr>
            <p>Pending Orders: <span className='pending'>{pending}</span></p>
            <p>Reconciled Orders: <span className='reconciled'>{reconciled}</span></p>
            <p>Total Orders: <span className='total'>{total}</span></p>
        </div>
     );
}
 
export default OrderDetails;