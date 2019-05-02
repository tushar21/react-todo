import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { Provider } from "react-redux"
import Store from "./redux/store"

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={Store}><App/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);    
});
