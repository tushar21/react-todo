import * as React from 'react';
import {UserSignupPage} from './signup';
import {shallow, configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { SignupForm } from '../../containers/SignupForm';

configure({adapter: new Adapter()});
let component:any;
describe('Signup Page', ()=>{

    beforeAll(()=>{
        const fn = jest.fn;
        component = shallow(<UserSignupPage  userSignup={fn}/>)
    })

    test('should contain signup form', () => {
        expect(component.find(SignupForm).html().length).toBeGreaterThanOrEqual(1)           
    })

    test('should contain heading signup', ()=>{
        expect(component.find('h2').html()).toEqual('<h2>Signup</h2>')
    }) 
})
