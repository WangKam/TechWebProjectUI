import { all } from 'redux-saga/effects';

import Auth from './Auth/saga';
import Laptop from './Laptop/saga';

export default function* AppSaga() {
  yield all([
    Auth(),
    Laptop()
  ]);
}
