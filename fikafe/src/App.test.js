import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from "./components/LoginForm";
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';

describe('routes using memory router', () => {

  it('should show Login component for / router (using memory router)', () => {
    const component = mount( <MemoryRouter initialentries="{['/']}">
        <App/>
     </MemoryRouter>
    );
    expect(component.find(Login)).toHaveLength(1);
  })

  it('should show SignupForm component for /register router (using memory router)', () => {
    const component = mount( <MemoryRouter initialentries="{['/register']}">
        <App/>
     </MemoryRouter>
    );
    expect(component.find(SignupForm)).toHaveLength(1);
  })
})
