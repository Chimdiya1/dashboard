import React from 'react';
import Chart from '../Chart/Chart.component';


const data = [
    [
        {
            name: 'Jan', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Feb', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Apr', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'May', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Jun', uv: 2390, pv: 3800, amt: 2500,
        },
    ],
    [
        {
            name: 'Jul', uv: 400, pv: 2400, amt: 2400,
        },
        {
            name: 'Aug', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Sep', uv: 2600, pv: 9800, amt: 2290,
        },
        {
            name: 'Oct', uv: 780, pv: 3908, amt: 2000,
        },
        {
            name: 'Nov', uv: 190, pv: 4800, amt: 2181,
        },
        {
            name: 'Dec', uv: 2990, pv: 3800, amt: 2500,
        },
    ],
];



const Graph = ({range}) => {
    return ( 
        <div className='graph'>
            <Chart data={data[range]}/>
        </div>
     );
}
 
export default Graph;
