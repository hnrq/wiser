import {
  AUTH_FAILED,
  AUTH_REQUESTED,
  AUTH_SUCCEEDED,
  AUTH_USER_NOT_FOUND
} from 'constants/auth';
import * as actions from '.';

describe('authActions test section', () => {
  it('should create an AUTH_REQUEST action', () => {
    expect(actions.authRequest('email', 'password')).toEqual({
      type: AUTH_REQUESTED,
      email: 'email',
      password: 'password'
    });
  });

  it('should create an AUTH_SUCCEEDED action', () => {
    expect(actions.authSuccess({ email: 'email' })).toEqual({
      type: AUTH_SUCCEEDED,
      userInfo: { email: 'email' }
    });
  });

  it('should create an AUTH_FAILED action', () => {
    expect(actions.authFailure('error')).toEqual({
      type: AUTH_FAILED,
      error: 'error'
    });
  });

  it('should create an AUTH_USER_NOT_FOUND action', () => {
    expect(actions.authUserNotFound()).toEqual({
      type: AUTH_USER_NOT_FOUND
    });
  });
});
