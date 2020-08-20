import React from 'react'
import './tableRow.scss'
const TableRow = ({Logo, title, price,transactionId, time, status}) => {
    return ( 
        <tr>
            <td><img src={Logo} alt="avatar" className="avatar" />{title}</td>
            <td>&#36;{price}</td>
            <td>{transactionId}</td>
            <td>{time}</td>
            <td><div className={`label ${status}`}><i className='fas fa-circle'></i> {status}</div></td>
            <td><i className='fas fa-chevron-down'></i></td>
        </tr>
     );
}
 
export default TableRow;