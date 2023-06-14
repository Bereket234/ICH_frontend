import http from './httpServices' 
import config from '../config.json'

export async function register(user){
    return await http.post(`${config.apiEndpoint}user/register/`, {user})
   
}


export function getUser(token){
    return http.get(`${config.apiEndpoint}user/`)
}