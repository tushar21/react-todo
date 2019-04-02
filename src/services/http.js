import axios from 'axios';
import Config from '../configs';

export function get(url){
    return axios.get(`${Config.API_URL}${url}` );
}

export function post(url, data){
    return axios.post(`${Config.API_URL}${url}`, data);
}