export interface IUser {
  avatar_url: string
  login: string //username
  html_url: string //git profile
  bio: any
  id: number
}

export interface ISagaAction<T> {
  type: string
  payload: T
}

export interface IError {
  response: {
    data: {
      message: string
    }
  }
}
