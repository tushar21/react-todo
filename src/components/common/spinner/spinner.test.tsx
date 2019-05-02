import * as React from 'react';
import {create} from 'react-test-renderer';
import {SpinnerLoader} from './Spinner';

test('default loader should be disabled', () => {
    const component = create(<SpinnerLoader loading={true}>Hello</SpinnerLoader>)
    
    let tree = component.toJSON()
    const loadingSpan  = tree.children[0].children[0].children[0];
    expect(loadingSpan.type).toEqual('span')
    expect(loadingSpan.props.className).toEqual('sr-only')
    expect(loadingSpan.children[0]).toEqual('Loading...')
    expect(tree).toMatchSnapshot();    
})


test('loader should be disabled and content will be displayed', () => {
    const content = 'Hello';
    const component = create(<SpinnerLoader loading={false}>{content}</SpinnerLoader>)    
    let tree = component.toJSON()
    console.log(tree, 'tree')
    expect(tree.type).toEqual('div')
    expect(tree.children[0]).toEqual(content)
    expect(tree).toMatchSnapshot();    
})