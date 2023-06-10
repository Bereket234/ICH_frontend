import { useState,useEffect } from 'react';

import { Flex, Heading,} from '@chakra-ui/react';
import {ResponsiveContainer,} from 'recharts';
import Piechart from '../components/common/Piechart';
import Barchart from '../components/common/Barchart';
import Linechart from '../components/common/Linechart';
import { get10DaysData, getAllTimeData } from '../services/imageService';

const hemorrhageData= [
    {type: "subdural", count: 10},  
    {type: "epidural", count: 5},  
    {type: "intraventricular", count: 3},  
    {type: "intraparenchymal", count: 8},  
    {type: "subarachnoid", count: 6},
]
const totalCount= [
    {type: "hemorrhage", count:50, color: "#0088FE"},
    {type: "noHemorrhage", count: 20, color: "#00C49F"}
]

const Dashboard = () => {
  const [data, setData]= useState([])
  const [totalCount, setTotalCount]= useState([])


  useEffect(()=> {
    get10DaysData()
    .then(res=> {setData(res.data)})
    .catch(err=> console.log(err))

  },[])
  useEffect(()=> {
    getAllTimeData()
    .then(res=>{
      const {data}= res

      const temp= [
        {type: "hemorrhage", count:data.hemorrhage, color: "#0088FE"},
        {type: "noHemorrhage", count:data.nohemorrhage, color: "#00C49F"}
      ]
      setTotalCount(temp)
    })
  }, [])
      
    return (  
        <>
          <Flex flexDirection='column' justifyContent="center" >
            <Heading mb={4}>Patient Hemorrhage Status</Heading>
            <Flex justifyContent="center" alignItems='center'>
              <ResponsiveContainer flex={1} w= '100%'>
                <Piechart totalCount={totalCount}/>
              </ResponsiveContainer>
              <Linechart data= {data} datakey= 'date' keys={[ {type:"hemorrhage", color: "#0088FE"},  {type:"nohemorrhage", color:"#00C49F"}]} />
            </Flex>
          </Flex>
          <Flex flexDirection="column" alignItems="center" p={4}>      
              <Heading as="h1" mb={4}>Hemorrhage Results for the Last 10 Days</Heading>      
              <Barchart data= {data} datakey='date' keys= {[ {type:"hemorrhage", color: "#0088FE"},  {type:"nohemorrhage", color:"#00C49F"}]}/>
          </Flex>
          <Flex flexDirection="column" alignItems="center" p={4}>      
              <Heading as="h1" mb={4}>        
              data on the count of differnet hemmhorage types     
              </Heading>    
              <Barchart data= {hemorrhageData} keys={[{type:"count", color: "#0088FE"}]} datakey='type' />    
          </Flex>
        </>  

        );
    };
    export default Dashboard;