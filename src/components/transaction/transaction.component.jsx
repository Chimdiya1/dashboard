import React from 'react'
import './transaction.scss'
const Transaction = ({title,amount}) => {
    return ( 
        <div className='transaction'>
            <div className='details'>
                <p className="title">{title}</p>
                <p className="amount">{amount}</p>
            </div>
            <div className="graph">

            </div>
        </div>
     );
}
 
export default Transaction;