import { createStore } from 'redux';
import reducer from './src/reducers/postReducer.js';

export default createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// you can play here with dispatch and such 