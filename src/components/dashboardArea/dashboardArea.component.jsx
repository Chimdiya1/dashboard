import React from 'react'
import './dashboardArea.scss'
import Transaction from '../transaction/transaction.component'
import GraphBody from '../graphBody/graphBody.component'
import Details from '../details/details.component'
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
        </div>
     );
}
 
export default DashboardArea;