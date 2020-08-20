import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

export default class Chart extends PureComponent {
    render() {
        return (
            <AreaChart
                width={720}
                height={274}
                data={this.props.data}
            >
                <CartesianGrid horizontal={false} />
                <XAxis dataKey='name' />
                <YAxis/>
                <Tooltip />
                <Area dataKey="uv"  stroke="rgba(135, 131, 216, 0)" fill="rgba(2, 148, 255, 0.45)" />
            </AreaChart>
        );
    }
}