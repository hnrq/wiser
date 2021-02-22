import { auth } from '.';
import { runSaga, Saga } from 'redux-saga';
import { AuthReducerAction } from 'reducers/authReducer';
import * as api from 'api';
import { authFailure, authSuccess, authUserNotFound } from 'actions/authActions';

describe('authSaga test section', () => {
  it('should dispatch AUTH_SUCCESS action when successfully authenticating', async () => {
    const dispatched: Array<AuthReducerAction> = [];
    const mockResponse = { email: 'user@email.com', name: 'user' };
    const mockAuth = jest
      .spyOn(api, 'auth')
      .mockImplementation((email, password) =>
        Promise.resolve({
          data: [mockResponse],
          status: 200,
          statusText: 'success',
          headers: '',
          config: {}
        })
      );

    await runSaga(
      {
        dispatch: (action: AuthReducerAction) => dispatched.push(action)
      },
      auth as Saga,
      { email: 'user@email.com', password: '123456' }
    );

    expect(mockAuth).toHaveBeenCalled();
    expect(dispatched).toEqual([authSuccess(mockResponse)]);
    mockAuth.mockClear();
  });

  it('should dispatch AUTH_USER_NOT_FOUND when user isn\'t found', async () => {
    const dispatched: Array<AuthReducerAction> = [];
    const mockAuth = jest
      .spyOn(api, 'auth')
      .mockImplementation((email, password) =>
        Promise.resolve({
          data: [],
          status: 200,
          statusText: 'success',
          headers: '',
          config: {}
        })
      );

    await runSaga(
      {
        dispatch: (action: AuthReducerAction) => dispatched.push(action)
      },
      auth as Saga,
      { email: 'user@email.com', password: '123456' }
    );

    expect(mockAuth).toHaveBeenCalled();
    expect(dispatched).toEqual([authUserNotFound()]);
    mockAuth.mockClear();
  });

  it('should dispatch AUTH_FAILURE action when failing to authenticate', async () => {
    const dispatched: Array<AuthReducerAction> = [];
    const mockError = { message: 'error' };
    const mockAuth = jest
      .spyOn(api, 'auth')
      .mockImplementation((email, password) =>
        Promise.reject({ status: 500, message: 'error' })
      );

    await runSaga(
      {
        dispatch: (action: AuthReducerAction) => dispatched.push(action)
      },
      auth as Saga,
      { email: 'user@email.com', password: '123456' }
    );

    expect(mockAuth).toHaveBeenCalled();
    expect(dispatched).toEqual([authFailure(mockError.message)]);
    mockAuth.mockClear();
  });
});
