import React, {useState} from 'react'
import './graphBody.scss'
import Graph from '../graph/graph.component'
const GraphBody = () => {
    const [Range, setRange] = useState(0)
    return ( 
        <div className="graphBody">
            <div className='graphBody-header'>
                <h3>Today: 5, Aug 2018</h3>
                <select onChange={(e)=>{setRange(e.target.value)}} className='date-select'>
                    <option value={0}>1 Jan - 1 Jun</option>
                    <option value={1}>1 Jun - 31 Dec</option>
                </select>
                <div className='buttons'>
                    <button onClick={() => {
                        return Range === 1 ? setRange(0) : setRange(1)
                    }}><i className='fas arrow fa-chevron-left'></i></button>
                    <button onClick={() => {
                        return Range === 0 ? setRange(1) : setRange(0)
                    }}><i className='fas arrow fa-chevron-right'></i></button>
                </div>
            </div>
            <Graph range={Range}/>
        </div>
     );
}
 
export default GraphBody;