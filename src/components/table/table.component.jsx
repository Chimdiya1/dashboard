import React from 'react'
import Logo from '../../assets/avatar.jpg';
import './table.scss'
import TableRow from '../tableRow/tableRow.component';
const Table = () => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Item Type</th>
                    <th>Price</th>
                    <th>Transaction No</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <TableRow Logo={Logo} title='XApple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Unreconcilled'/>                
                <TableRow Logo={Logo} title='XApple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Reconcilled'/>                
                <TableRow Logo={Logo} title='Apple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Unreconcilled'/>                
                <TableRow Logo={Logo} title='Apple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Pending'/>                
                <TableRow Logo={Logo} title='Apple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Reconcilled'/>                
                <TableRow Logo={Logo} title='Apple Mac Book 15" 500SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Unreconcilled'/>                
                <TableRow Logo={Logo} title='XApple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Pending'/>                
                <TableRow Logo={Logo} title='XApple Mac Book 15" 1TB 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Unreconcilled'/>                
                <TableRow Logo={Logo} title='XApple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Reconcilled'/>                
                <TableRow Logo={Logo} title='XApple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Unreconcilled'/>                
                <TableRow Logo={Logo} title='XApple Mac Book 15" 250SSD 12GB' transactionId='0129734990' price='19,000' time='19:00' status='Pending'/>                
            </tbody>
        </table>
     );
}
 
export default Table;