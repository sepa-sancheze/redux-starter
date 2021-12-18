import { BUG_TYPES } from './ACTION_TYPES';

export const ADD_BUG = (description) => ({
    type: BUG_TYPES.bug_added,
    payload: {
        description
    }
});

export const REMOVE_BUG = (id) => ({
    type: BUG_TYPES.bug_removed,
    payload: {
        id
    }
});

export const SOLVE_BUG = (id) => ({
    type: BUG_TYPES.bug_solved,
    payload: {
        id
    }
});