import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer, { AuthReducerStateType } from 'reducers/authReducer';
import authSaga from 'sagas/authSaga';

const sagaMiddleware = createSagaMiddleware();

export type RootState = {
  authReducer: AuthReducerStateType;
};

const store = createStore(
  combineReducers({
    authReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSaga);

export default store;
