import User from '../types/user';
import {get, post} from './http';
import {ACTIONS} from '../helpers/constants';


export function Signup(user: User){
    return post('users', user);
}

export function Login(payload: object){
    return post('users/login', payload);
}

export function getLoggedInUser(){
    const user = localStorage.getItem(ACTIONS.LOGGED_IN_USER)
    if(user !== '') return JSON.parse(user)
    return false;
}