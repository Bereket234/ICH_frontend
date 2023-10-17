import { useState,useEffect } from 'react';

import { Box, Flex, Heading,} from '@chakra-ui/react';
import {ResponsiveContainer,} from 'recharts';
import Piechart from '../components/common/Piechart';
import Barchart from '../components/common/Barchart';
import Linechart from '../components/common/Linechart';
import { get10DaysData, getAllTimeData } from '../services/imageService';
import { useAuthContext } from '../hooks/useAuthContext';

const hemorrhageData= [
    {type: "subdural", count: 10},  
    {type: "epidural", count: 5},  
    {type: "intraventricular", count: 3},  
    {type: "intraparenchymal", count: 8},  
    {type: "subarachnoid", count: 6},
]
// const totalCount= [
//     {type: "hemorrhage", count:50, color: "#0088FE"},
//     {type: "noHemorrhage", count: 20, color: "#00C49F"}
// ]

const Dashboard = () => {
  const [data, setData]= useState([])
  const [totalCount, setTotalCount]= useState([])
  const [hemorrhageData, setHemorrhageData]= useState([])
  const {user}= useAuthContext()


  useEffect(()=> {
    get10DaysData()
    .then(res=> {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err=> console.log(err))

  },[])
  useEffect(()=> {
    getAllTimeData()
    .then(res=>{
      const {data}= res
      console.log(data)

      let temp= [
        {type: "hemorrhage", count:data.hemorrhage, color: "#0088FE"},
        {type: "noHemorrhage", count:data.nohemorrhage, color: "#00C49F"}
      ]
      setTotalCount(temp)
      temp= [
        {type: "subdural", count: data.subdural},  
        {type: "epidural", count: data.epidural},  
        {type: "intraventricular", count: data.intraventricular},  
        {type: "intraparenchymal", count: data.intraparenchymal},  
        {type: "subarachnoid", count: data.subarachnoid},
    ]
    setHemorrhageData(temp)
    })
    .catch(e=> console.log(e))
  }, [])
      
  console.log("herte", totalCount, totalCount.hemorrhage , totalCount.noHemorrhage)
    return (  
        <>
          <Flex flexDirection='column' justifyContent="center" >
            <Heading mb={4}>Patient Hemorrhage Status</Heading>
            <Flex justifyContent="center" alignItems='center'>
              <ResponsiveContainer flex={1} w= '100%'>
                <Piechart totalCount={totalCount} nameKey='hemhorage'/>
              </ResponsiveContainer>
              <Linechart data= {data} datakey= 'date' keys={[ {type:"hemorrhage", color: "#0088FE"},  {type:"nohemorrhage", color:"#00C49F"}]} />
            </Flex>
          </Flex>
          <Flex flexDirection="column" alignItems="center" p={4}>      
              <Heading as="h1" mb={4}>Hemorrhage Results for the Last 10 Days</Heading>      
              <Barchart data= {data} datakey='date' keys= {[ {type:"hemorrhage", color: "#0088FE"},  {type:"nohemorrhage", color:"#00C49F"}]}/>
          </Flex>
          <Flex flexWrap="wrap" flexDirection="column" alignItems="center" p={4}>      
              <Heading as="h1" mb={4}>        
              data on the count of differnet hemmhorage types     
              </Heading>    
              <Barchart data= {hemorrhageData} keys={[{type:"count", color: "#0088FE"}]} datakey='type' />    
              <Flex  flexWrap="wrap">
                
                {hemorrhageData.map(data=> {
                  return (
                    <Box key={data.type} position='relative' top= {10} w="30%" minW="300px" h="300px" m="1%">
                      <Piechart totalCount= {[{type: data.type, count:data.count, color: "#0088FE" }, {type: `no${data.type}`, count:Number((totalCount[0].count + totalCount[1].count) - data.count), color: "#00C49F" }] } nameKey={data.type}/>
                    </Box>
                    )
                })}
              </Flex>
          </Flex>
        </>  

        );
    };
    export default Dashboard;