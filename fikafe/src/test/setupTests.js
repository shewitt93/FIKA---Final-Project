import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import sinon from 'sinon';

global.React = React;
global.shallow = shallow;
global.sinon = sinon;