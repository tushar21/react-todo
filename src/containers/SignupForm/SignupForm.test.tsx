import * as React from 'react';
import SignupForm from './SignupForm';
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Signup form', ()=>{
    test('should call onSignup function on submit', () => {
        const MockEvent  = { preventDefault: ()=>{}, signup: ()=>{}}
        const spy = jest.spyOn(MockEvent, 'preventDefault');
        const SignupSpy = jest.spyOn(MockEvent, 'signup');
     
        const component = shallow(<SignupForm onSignup={MockEvent.signup}/>)
        component.find('form').simulate('submit', MockEvent)
        expect(spy).toHaveBeenCalled();
        expect(SignupSpy).toHaveBeenCalled();
    })
})
