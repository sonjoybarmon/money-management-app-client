import Axios from 'axios';
import * as Types from './types'
import jwtDecode from "jwt-decode";
import SetAuthToken from '../../../utils/SetAuthToken';

export const register = (user , history) => dispatch => {
    Axios.post('http://localhost:4000/api/users/register' , user)
    .then(res => {
        dispatch({
            type : Types.USER_ERROR,
            payload : {
                error : {}
            }
        })
        console.log(res);
        history.push('/login')
    })
    .catch(error => {
        dispatch({
            type : Types.USER_ERROR,
            payload : {
                error : error.response.data
            }
        })
    })
}


export const login = (user , history) => dispatch => {
    Axios.post('http://localhost:4000/api/users/login' , user)
    .then(res => {
        console.log(res);
        let token = res.data.token
        localStorage.setItem('auth_token', token)
        SetAuthToken(token)
        let decode = jwtDecode(token)
        
        dispatch({
            type : Types.SET_USER,
            payload : {
                user : decode
            }
        })

        history.push('/')
    })
    .catch(error => {
        dispatch({
            type: Types.USER_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })
}


export const logout = (history) => {
    localStorage.removeItem('auth_token')
    history.push('/login')
    return {
        type : Types.SET_USER,
        payload: {
            user : {}
        }
    }
}