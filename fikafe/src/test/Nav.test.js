import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/Nav'; 

describe("NavBar", () => {

    let component;

    beforeEach(() => {

        component = shallow(<NavBar/>);
        
 
     });

    test("link to /home", () => {

        expect(component.find(NavLink).first().props()).to.be("/home");
    });
});