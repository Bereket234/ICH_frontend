import http from './httpServices' 
import config from '../config.json'
import axios from 'axios'

export async function register(user){
    console.log("here", user)
    const res=  await axios.post(`${config.apiEndpoint}user/register/`, {user})
    console.log(res)
   
}


export function getUser(token){
    return http.get(`${config.apiEndpoint}user/`)
}