import { createStore } from 'redux';
import { reducer_bugs } from './reducer';
import { middlewares } from './middleware';

export const store = createStore(reducer_bugs, middlewares);
