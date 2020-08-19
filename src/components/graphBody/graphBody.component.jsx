import React from 'react'
import './graphBody.scss'
import Graph from '../graph/graph.component'
const GraphBody = () => {
    return ( 
        <div className="graphBody">
            <div className='graphBody-header'>
                <h3>Today: 5, Aug 2018</h3>
                <select className='date-select'>
                    <option>1 Jan - 1 Jun</option>
                    <option>1 Jun - 31 Dec</option>
                </select>
                <div className='buttons'>
                    <button><i className='fas arrow fa-chevron-left'></i></button>
                    <button><i className='fas arrow fa-chevron-right'></i></button>
                </div>
            </div>
            <Graph/>
        </div>
     );
}
 
export default GraphBody;