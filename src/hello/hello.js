import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  message: '',
  pending: false
};

export const { 
  sayHello, 
  sayHelloAsync,
  sayHelloComplete
} = createActions(
  'SAY_HELLO', 
  'SAY_HELLO_ASYNC',
  'SAY_HELLO_COMPLETE'
);

const reducer = handleActions({
  [sayHello](state, action) {
    return {...state, message: action.payload}
  },
  [sayHelloAsync](state, action) {
    return {...state, pending: true};    
  },
  [sayHelloComplete](state, action) {
    return {...state, pending: false, message: action.payload};    
  }
}, defaultState);

export default reducer;
