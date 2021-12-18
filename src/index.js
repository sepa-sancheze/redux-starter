import * as actions from './ACTIONS';
import { store } from './store';

store.dispatch(actions.ADD_BUG('New Bug'));

store.dispatch(actions.ADD_BUG('New Bug 2'));

store.dispatch(actions.REMOVE_BUG(1));
