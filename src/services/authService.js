import jwtDecode from 'jwt-decode';
import http from './httpServices'
import config from '../config.json'

const tokenKey= 'user'

http.setJwt(getJwt())
export async function auth (username, password){
    return http.post(`${config.apiEndpoint}token/`,{username, password})
}


export function loginWithJwt (jwt){
    localStorage.setItem(tokenKey, jwt)
}

export function getCurrentUser(){
    try {
        const result =localStorage.getItem(tokenKey)
        const user= jwtDecode(result)
        return user
      } catch (ex) {
        return null
      }
}

export function logout(){
    localStorage.removeItem(tokenKey)
    window.location= '/'
}

function getJwt(){
    return localStorage.getItem(tokenKey)
}
