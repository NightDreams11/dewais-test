import { all } from "redux-saga/effects"
import { userWatcher } from "./userSaga"

export function* rootSaga() {
  yield all([userWatcher()])
}
