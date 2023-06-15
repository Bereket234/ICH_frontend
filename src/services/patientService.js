import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getPatients() {
  
  return await http.get(`${config.apiEndpoint}patient/all/`)
}

export async function addPatient(data){
  http.post(`${config.apiEndpoint}patient/register/`, data)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}
