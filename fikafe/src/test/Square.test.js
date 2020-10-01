import React from 'react';
//import { shallow } from 'enzyme';
// import sinon from 'sinon';

import Square from '../components/Square';

// describe('Test Button component', () => {

//     beforeEach(() => {
//         component = shallow(<Square/>);
 
//      });
//     test('simulates click events', () => {
//         const mockCallBack = sinon.spy();
//         component.find('button').simulate('click');
//         expect(mockCallBack).toHaveProperty('callCount', 1);
//   });
// });

describe('Test Button component', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      const button = shallow((<Square onClick={mockCallBack}>Ok!</Square>));
      button.find('button').simulate('click');
      expect(mockCallBack).toHaveBeenCalled();
    });
  });