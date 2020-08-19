import React from 'react'

const OrderDetails = ({pending,reconciled,total}) => {
    const hrStyle = {
        height: '4px',
        border: 'none',
        borderRadius: '120px',
        background: `linear-gradient(to right, green 0% ${reconciled}%, yellow ${reconciled}% ${total}%)`,
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