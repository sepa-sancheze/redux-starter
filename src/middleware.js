import { applyMiddleware } from 'redux';

const logger_middleware = store => next => action => {
    console.log('dispatching: ', action);
    console.log('payload: ', action.payload);
    console.log('store: ', store);
    console.log('---------');
    next(action);
};

export const middlewares = applyMiddleware(
    logger_middleware,
);