import * as actions from './ACTIONS';
import { store } from './store';

store.subscribe(() => {
    console.log('Store changed! ', store.getState());
});

store.dispatch(actions.ADD_BUG('New Bug'));

store.dispatch(actions.REMOVE_BUG(1));
