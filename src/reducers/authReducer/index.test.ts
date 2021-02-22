import authReducer from './index';
import {
  AUTH_REQUESTED,
  AUTH_SUCCEEDED,
  AUTH_FAILED,
  AUTH_USER_NOT_FOUND
} from 'constants/auth';

describe('authReducer test section', () => {
  it('should handle AUTH_REQUESTED', () => {
    expect(
      authReducer({ userInfo: {}, loading: false, authenticated: true }, { type: AUTH_REQUESTED })
    ).toEqual({
      userInfo: {},
      loading: true,
      authenticated: false
    });
  });

  it('should handle AUTH_SUCCEEDED', () => {
    expect(
      authReducer(
        { userInfo: {}, loading: true, authenticated: false },
        { type: AUTH_SUCCEEDED, userInfo: { id: '323134', name: 'test' } }
      )
    ).toEqual({
      userInfo: { id: '323134', name: 'test' },
      loading: false,
      authenticated: true
    });
  });

  it('should handle AUTH_FAILED', () => {
    expect(
      authReducer(
        { userInfo: {}, loading: true, authenticated: true },
        { type: AUTH_FAILED, error: 'error' }
      )
    ).toEqual({
      userInfo: {},
      loading: false,
      error: 'error',
      authenticated: false
    });
  });

  it('should handle AUTH_USER_NOT_FOUND', () => {
    expect(
      authReducer(
        { userInfo: {}, loading: true,  authenticated: true },
        { type: AUTH_USER_NOT_FOUND }
      )
    ).toEqual({
      userInfo: {},
      loading: false,
      authenticated: false,
      error: 'USER_NOT_FOUND',
    });
  });
});
