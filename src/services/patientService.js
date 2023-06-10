import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpServices'

export async function getPatients() {
  
  return await http.get(`${config.apiEndpoint}patient/all/`)
}

export async function addPatient(data){
//   const res= data
//   const submission= {
//     name: res.get('name'),
//     cardNumber: res.get('cardNumber'),
//     age: res.get('age'),
//     sex: res.get('sex'),
//     phone: res.get('phoneNumber'),
//     description: res.get('description')
//   }
//   console.log(submission)
  http.post(`${config.apiEndpoint}patient/register/`, data)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}

export async function addExpense({request}){
  const res= await request.formData()
  const submission= {
    category : res.get('name'),
    amount: res.get('amount')
  }
  console.log(submission)
  http.post(`${config.apiEndpoint}expense/`, submission)
  .then(res=>{console.log(res)})
  .catch(e=> console.log('error submitting'))
  return redirect('/dashboard')
}