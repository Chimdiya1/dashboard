import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
    {
        name: 'January', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

export class Chart extends PureComponent {
    render() {
        return (
            <AreaChart
                width={720}
                height={274}
                data={data}
            >
                <CartesianGrid horizontal={false} />
                <XAxis dataKey='name'/>
                <Tooltip />
                <Area dataKey="uv" label={{ fill: 'red', fontSize: 2, position:'right' }} stroke="rgba(135, 131, 216, 0)" fill="rgba(2, 148, 255, 0.45)" />
            </AreaChart>
        );
    }
}

const Graph = () => {
    return ( 
        <div className='graph'>
            <Chart/>
        </div>
     );
}
 
export default Graph;
