import React from 'react'
import Logo from '../../assets/avatar.jpg';
import './table.scss'
import TableRow from '../tableRow/tableRow.component';
const Table = ({ data }) => {
    console.log(data)
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
                {data.map((data) => {
                    return <TableRow
                        Logo={Logo}
                        title={data.title}
                        price={data.price}
                        transactionId={data.transactionId}
                        status={data.status}
                        time={data.time}
                    />
                })}

            </tbody>
        </table>
    );
}

export default Table;