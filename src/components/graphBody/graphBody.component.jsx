import React from 'react'
import './graphBody.scss'
import Graph from '../graph/graph.component'
import ApexCharts from 'apexcharts';

const GraphBody = () => {
    const firstHalf = {
         start : new Date('01 Jan 2012').getTime(),
         stop : new Date('01 Jun 2012').getTime(),
    }
    const secondHalf = {
         start : new Date('01 Jun 2012').getTime(),
         stop : new Date('31 Dec 2012').getTime(),
    }
    const all = {
         start : new Date('01 Jan 2012').getTime(),
         stop : new Date('31 Dec 2012').getTime(),
    }
    const updateData = (timeline) => {

        switch (timeline) {
            case 'first-half':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    firstHalf.start,
                    firstHalf.stop
                );
                break;
            case 'second-half':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    secondHalf.start,
                    secondHalf.stop
                );
                break;
            case 'all':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    all.start,
                    all.stop
                );
                break;
            default:
        }
    }

    return ( 
        <div className="graphBody">
            <div className='graphBody-header'>
                <h3>Today: 5, Aug 2018</h3>
                <select onChange={(e)=>{updateData(e.target.value)}} className='date-select'>
                    <option value='first-half'>1 Jan - 1 Jun</option>
                    <option value='second-half'>1 Jun - 31 Dec</option>
                    <option value='all'>All time</option>
                </select>
                <div className='buttons'>
                    <button onClick={() => {
                        updateData('first-half')
                    }}><i className='fas arrow fa-chevron-left'></i></button>
                    <button onClick={() => {
                        updateData('second-half')
                    }}><i className='fas arrow fa-chevron-right'></i></button>
                </div>
            </div>
            <Graph range={Range} firstHalf={firstHalf} secondHalf={secondHalf} all={all}/>
        </div>
     );
}
 
export default GraphBody;