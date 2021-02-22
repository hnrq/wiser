import {
  AUTH_REQUESTED,
  AUTH_SUCCEEDED,
  AUTH_FAILED,
  AUTH_USER_NOT_FOUND
} from 'constants/auth';

export type AuthReducerAction = {
  type:
    | 'AUTH_REQUESTED'
    | 'AUTH_SUCCEEDED'
    | 'AUTH_FAILED'
    | 'AUTH_USER_NOT_FOUND';
  userInfo?: { [key: string]: string };
  error?: string;
};

export type AuthReducerStateType = {
  userInfo: { [key: string]: string };
  loading: boolean;
  authenticated: boolean;
  error?: string;
};

const initialState: AuthReducerStateType = {
  userInfo: {},
  loading: false,
  authenticated: false
};

export default function authReducer(state = initialState, action: AuthReducerAction) {
  switch (action.type) {
    case AUTH_REQUESTED:
      return {
        userInfo: {},
        loading: true,
        authenticated: false
      };
    case AUTH_SUCCEEDED:
      return {
        userInfo: { ...action.userInfo },
        loading: false,
        authenticated: true
      };
    case AUTH_USER_NOT_FOUND:
      return {
        userInfo: {},
        loading: false,
        authenticated: false,
        error: 'USER_NOT_FOUND'
      };
    case AUTH_FAILED:
      return {
        userInfo: {},
        error: action.error,
        authenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
