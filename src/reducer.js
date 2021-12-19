import { BUG_TYPES } from './ACTION_TYPES';

let id = 0;

export const reducer_bugs = (state = [], action) => {
    switch (action.type) {
        case BUG_TYPES.bug_added:
            return [
                ...state,
                {
                    id: ++id,
                    description: action.payload.description,
                    resolved: false,
                    owner: action.payload.owner
                }
            ]
        case BUG_TYPES.bug_removed:
            return state.filter(bug => bug.id !== action.payload.id);
        case BUG_TYPES.bug_solved:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});
        default:
            return state;
    }
}
