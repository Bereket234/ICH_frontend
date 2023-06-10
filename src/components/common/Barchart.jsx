import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
function Barchart({data, datakey, keys}) {
    return (
        <BarChart width={800} height={400} data={data}>        
            <CartesianGrid strokeDasharray="3 3" />        
            <XAxis dataKey={datakey} />        
            <YAxis />        
            <Tooltip />        
            <Legend /> 
            {
                keys.map(key=> (
                    <Bar key={key.color} dataKey={key.type} fill={key.color}/>
                ))
            }             
            </BarChart> 
    );
}

export default Barchart;