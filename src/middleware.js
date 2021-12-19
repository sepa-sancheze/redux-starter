import { applyMiddleware } from 'redux';

const logger_middleware = store => next => action => {
    console.log('dispatching: ', action);
    console.log('payload: ', action.payload);
    next(action);
    console.log('store: ', store.getState());
    console.log('---------');
};

export const middlewares = applyMiddleware(
    logger_middleware,
);