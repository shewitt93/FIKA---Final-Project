import * as actions from '../Actions/actions'
import FikaReducer from '../reducer/Reducer'
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => { 
    store.clearActions();
  });

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'LOAD_DATA',
        'payload': 'hello',
      },
    ];

    store.dispatch(actions.loadData('hello'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'LOAD_CHAT',
        'payload': 'hey',
      },
    ];

    store.dispatch(actions.loadChat('hey'));
    expect(store.getActions()).toEqual(expectedActions);
  });

});

describe('reducer', () => {
  test('returns the initial state', () => {
    const action = { type: actions, payload: [] };
    const expectedState = { userData: [], orgData:[], message:[] };

    expect(FikaReducer(undefined, action)).toEqual(expectedState);
  });
});

