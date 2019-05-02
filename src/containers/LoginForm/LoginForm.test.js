import * as React from 'react';
import LoginForm from './LoginForm';
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Login form', ()=>{
    test('should call onLogin function on submit', () => {

        // Define spies
        const MockEvent  = { preventDefault: ()=>{}, login: ()=>{}}
        const spy = jest.spyOn(MockEvent, 'preventDefault');
        const LoginSpy = jest.spyOn(MockEvent, 'signup');
        
        // Create component
        const component = shallow(<LoginForm onLogin={MockEvent.login}/>)
        component.find('form').simulate('submit', MockEvent)
        expect(spy).toHaveBeenCalled();
        expect(LoginSpy).toHaveBeenCalled();
        
    })
})
