import React from 'react';
import ApexChart from '../Chart/Chart.component';






const Graph = ({ firstHalf ,secondHalf, all }) => {
    return ( 
        <div className='graph'>
            <ApexChart firstHalf={firstHalf} secondHalf={secondHalf} all={all} />
        </div>
     );
}
 
export default Graph;
