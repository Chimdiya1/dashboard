import React, {useState} from 'react'
import './dashboardArea.scss'
import Transaction from '../transaction/transaction.component'
import GraphBody from '../graphBody/graphBody.component'
import Details from '../details/details.component'
import Table from '../table/table.component'
import data from './data'
const DashboardArea = () => {
    const [Data, setData] = useState(data)
    const filter = (val) => {
        if (val!== 'All') {
            let newData = data.filter((data) => data.status === val)
            setData(newData)
        } else {
            setData(data)
        }
    }
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
                <select onChange={(e) => { filter(e.target.value) }} name="payments" id="payment" className='select-payment'>
                    <option value="All">All</option>
                    <option value="Reconcilled">Reconciled</option>
                    <option value="UnReconcilled">UnReconciled</option>
                    <option value="Reconcilled">Settled</option>
                    <option value="Pending">UnSettled</option>
                </select>
            </div>
            <Table data={Data} />
            <div className="pagination">
                <p>Showing 1 to 10 of 500 entries</p>
                <div className='pagination-buttons'>
                    <p>Previous</p>
                    <p className='current-page'>1</p>
                    <p>2</p>
                    <p>Next</p>
                </div>
            </div>
        </div>
     );
}
 
export default DashboardArea;