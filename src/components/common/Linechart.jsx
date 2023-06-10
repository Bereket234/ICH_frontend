import React from 'react';
import {Line, LineChart, ResponsiveContainer, XAxis, YAxis,CartesianGrid, Tooltip, Legend } from 'recharts'

function Linechart({data, keys, datakey}) {
    return (
        <ResponsiveContainer flex={1} width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={datakey} />
                <YAxis />
                <Tooltip />
                <Legend />
                {
                    keys.map(key=>(
                        <Line key= {key.color} type="bitone" dataKey={key.type} stroke={key.color} />
                    ))
                }
            </LineChart>
        </ResponsiveContainer>
    );
}

export default Linechart;