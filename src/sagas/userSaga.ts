import { put, takeLatest } from "redux-saga/effects"
import { userAPI } from "../api"
import { getError, getUser, toggleIsFetching } from "../store/userSlice"
import { ISagaAction, IUser } from "../types"

interface IFetchUser {
  data: IUser
  status: number
  statusText: string
}

function* fetchUser(action: ISagaAction<{ name: string }>) {
  try {
    const response: IFetchUser = yield userAPI.getUser(action.payload.name)
    yield put(getUser(response.data))
  } catch (error) {
    yield put(getError(error))
  } finally {
    yield put(toggleIsFetching(false))
  }
}

export function* userWatcher() {
  yield takeLatest("FETCH_USER", fetchUser)
}
