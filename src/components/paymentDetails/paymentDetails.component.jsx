import React from 'react'

const PaymentDetails = ({ pending, reconciled, total }) => {
    const reconciledPercent = (reconciled / total) * 100
    const hrStyle = {
        height: '4px',
        border: 'none',
        borderRadius: '120px',
        background: `linear-gradient(to right, green 0% ${reconciledPercent}%, #FDC203 ${reconciledPercent}% 100%)`,
        marginBottom: '11px'
    }
    return (
        <div>
            <h3>Payments</h3>
            <hr style={hrStyle}></hr>
            <p>Unreconciled Payments: <span className='pending'>{pending}</span></p>
            <p>Reconciled Payments: <span className='reconciled'>{reconciled}</span></p>
            <p>Total Payments: <span className='total'>{total}</span></p>
        </div>
    );
}

export default PaymentDetails;