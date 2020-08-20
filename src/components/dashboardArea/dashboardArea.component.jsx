import React from 'react'
import './dashboardArea.scss'
import Transaction from '../transaction/transaction.component'
import GraphBody from '../graphBody/graphBody.component'
import Details from '../details/details.component'
import Table from '../table/table.component'
const DashboardArea = () => {
    return ( 
        <div className='dashboardArea'>
            <div className='transactions'>
                <Transaction title="Daily Transaction Volume" amount="2,345"/>
                <Transaction title="Daily Transaction Value" amount="&#8358;4,000,000"/>
                <Transaction title="Total Transaction Volume" amount="452,000"/>
                <Transaction title="Total Transaction Value" amount="&#8358;4,000,000"/>
            </div>
            <div className='graphArea'>
                <GraphBody />
                <Details/>
            </div>
            <h3>Payments</h3>
            <div className='payments'>
                <p>
                    Showing 20 out of 500 Payments
                </p>
                <div className='search'>
                    <i class="fa fa-search "></i>
                    <input class="input-field" type="text" placeholder='Search Payments'/>
                </div>
                <span>Show</span>
                <select name="payments" id="payment" className='select-payment'>
                    <option value="All">All</option>
                    <option value="Reconciled">Reconciled</option>
                    <option value="UnReconciled">UnReconciled</option>
                    <option value="Settled">Settled</option>
                    <option value="UnSettled">UnSettled</option>
                </select>
            </div>
            <Table/>
        </div>
     );
}
 
export default DashboardArea;