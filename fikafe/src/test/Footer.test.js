import React from 'react'
import Footer from '../components/Footer'

describe('Footer', () => {
    let component;

    beforeEach(() => {
        // some pre-test setup
        component = shallow(<Footer/>);
    });

    test("it should contain sentence", ()=>{
        expect(component.find('h1').text()).toContain('hello there')
    });
})