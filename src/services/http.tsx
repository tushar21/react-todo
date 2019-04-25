import axios from 'axios';
import Config from '../configs';

export function get(url: string, params : object = {}, host: string = ''){
    let apiHost = (host !== '') ? host : Config.API_URL;
    return axios.get(`${apiHost}${url}`, {params} );
}

export function post(url: string, data: object, host: string = ''){
    let apiHost = (host !== '') ? host : Config.API_URL;
    return axios.post(`${apiHost}${url}`, data);
}