import { createStore } from 'redux';
import { reducer_bugs } from './reducer';

export const store = createStore(reducer_bugs);
