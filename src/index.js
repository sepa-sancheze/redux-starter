import * as actions from './ACTIONS';
import { store } from './store';

store.dispatch(actions.ADD_BUG('New Bug', 'jpsanchez'));

store.dispatch(actions.ADD_BUG('New Bug 2', 'jestrada'));

store.dispatch(actions.REMOVE_BUG(1));
