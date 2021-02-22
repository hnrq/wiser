import {
  AUTH_REQUESTED,
  AUTH_SUCCEEDED,
  AUTH_FAILED,
  AUTH_USER_NOT_FOUND
} from 'constants/auth';

export const authRequest = (email: string, password: string) => ({
  type: AUTH_REQUESTED,
  email,
  password
});

export const authSuccess = (userInfo: { [key: string]: string }) => ({
  type: AUTH_SUCCEEDED,
  userInfo
});

export const authFailure = (error: string) => ({
  type: AUTH_FAILED,
  error
});

export const authUserNotFound = () => ({
  type: AUTH_USER_NOT_FOUND
});
