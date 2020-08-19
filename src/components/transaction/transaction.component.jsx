import './transaction.scss'
import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/tv8zfzxo/';

  render() {
    return (
      <AreaChart
        width={62}
        height={37}
        data={data}
      >
            <Area  dataKey="uv" stroke="#0294FF" fill="#0095ff" />
      </AreaChart>
    );
  }
}



const Transaction = ({title,amount}) => {
    return ( 
        <div className='transaction'>
            <div className='details'>
                <p className="title">{title}</p>
                <p className="amount">{amount}</p>
            </div>
            <div className="graph">
                <Example/>
            </div>
        </div>
     );
}
 
export default Transaction;