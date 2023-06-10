import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getAllTimeData() {
  
  return await http.get(`${config.apiEndpoint}predict/all-time-data/`)
}

export async function imageUpload(data){
    
  console.log(data)
  return http.post(`${config.apiEndpoint}predict/image/`, data)
}


export async function get10DaysData() {
  
  return await http.get(`${config.apiEndpoint}predict/10-days-data/`)
}
export async function getPreviousScans() {
  
  return await http.get(`${config.apiEndpoint}predict/all-predictions/`)
}

export async function uploadDicom(data){
    
  console.log(data)
  return http.post(`${config.apiEndpoint}predict/dicom/`, data)
}