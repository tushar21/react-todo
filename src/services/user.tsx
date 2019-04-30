import User from '../types/user';
import {get, post} from './http';

export function Signup(user: User){
    return post('users', user);
}

export function Login(payload: object){
    return post('users/login', payload);
} 