import * as React from 'react';
import {UserLoginPage} from './Login';
import {shallow, configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { LoginForm } from '../../containers/LoginForm';

configure({adapter: new Adapter()});
let component:any;
describe('Login Page', ()=>{

    beforeAll(()=>{
        const fn = jest.fn;
        component = shallow(<UserLoginPage userLogin={fn}/>)
    })

    test('should contain login form', () => {
        expect(component.find(LoginForm).html().length).toBeGreaterThanOrEqual(1)           
    })

    test('should contain heading login', ()=>{
        expect(component.find('h2').html()).toEqual('<h2>Login</h2>')
    }) 
})
