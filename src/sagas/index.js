// outsource dependencies
import { fork } from 'redux-saga/effects'
// local dependencies
import login from './login'

export default function* () {
    yield fork(login);
}
