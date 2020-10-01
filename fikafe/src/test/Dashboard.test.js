import Dashboard from '../components/DashBoard'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
 
const mockStore = configureStore([]);

describe('Dashboard', () => {
    let component, store, heading;
    

    beforeEach(() => {
        store = mockStore({
            user: 'bhuma'
        });
        component = renderer.create(
            <Provider store={store}>
              <Dashboard/>
            </Provider>
        );

    });
    // test('should render with given state from Redux store', () => {
    //     expect(component.toJSON()).toMatchSnapshot();
    //   });

    test("it should contain sentence", ()=>{
        expect(component.find('h5').text()).toContain('What would you like to do today?')
    });

})