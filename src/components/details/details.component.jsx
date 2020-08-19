import React from 'react'
import './details.scss'
import OrderDetails from '../orderDetails/orderDetails.component'
import PaymentDetails from '../paymentDetails/paymentDetails.component'
const Details = () => {
    return (
        <div className='details'>
            <OrderDetails pending={30} reconciled={70} total={100}/>
            <PaymentDetails pending={20} reconciled={80} total={100}/>        
        </div>
     );
}
 
export default Details;