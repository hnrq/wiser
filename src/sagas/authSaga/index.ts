import { call, takeEvery, put } from 'redux-saga/effects';
import { authSuccess, authFailure, authUserNotFound } from 'actions/authActions';
import { toast } from 'react-toastify';
import { AUTH_REQUESTED } from 'constants/auth';
import * as api from 'api';

export function* auth({ email, password }: { email: string; password: string }) {
  try {
    const { data } = yield call(api.auth, email, password);
    if (data.length > 0) {
      toast.success('Log-in realizado com sucesso.');
      yield put(authSuccess(data[0]));
    }
    else {
      toast.error('Senha ou e-mail incorretos.');
      yield put(authUserNotFound());
    }
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeEvery<any>(AUTH_REQUESTED, auth);
}