import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

const renderCustomizedLabel = ({ type, cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const Piechart = ({totalCount, nameKey}) => {
  console.log(totalCount, nameKey)
    return (
        <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        
        <ResponsiveContainer width="100%" height={400}>            
          <PieChart>
            <Pie
              data={totalCount}
              dataKey="count"
              nameKey={nameKey}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label= {renderCustomizedLabel}
            >
              {totalCount.map((entry, index) => (
                <Cell key={entry.type} fill={entry.color} />
              ))}
            </Pie>
            <Pie data={totalCount} dataKey="count" nameKey={nameKey} cx="50%" cy="50%" innerRadius={120} outerRadius={150} fill="#82ca9d">
            {totalCount.map((entry, index) => (
                <Cell key={entry.type} fill={entry.color} />
              ))}
            </Pie>
          
          </PieChart>
          
        </ResponsiveContainer>
            <Flex w= '50%' justifyContent='space-around'>
                {totalCount.map((entry, index) => (
                    <Flex alignItems='center' key= {entry.type}>
                        <Box mr={3} w='10px' h= '10px' content='' backgroundColor={entry.color}></Box>
                        <Text display='block'>{entry.type}</Text>
                    </Flex>
                ))}
            </Flex>
        
        </Flex>
    );
};

export default Piechart;