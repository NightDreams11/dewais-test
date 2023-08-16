import { FC, FormEvent, useEffect, useState } from "react"
import { IError } from "../../../types"
import { UserPreviev } from "../UserPreviev/UserPreview"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import "./Layout.scss"
import { getUser, toggleIsFetching } from "../../../store/userSlice"
import { Preloader } from "../../base/Preloader"

export const Layout: FC = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>("")

  const user = useSelector((state: RootState) => state.usersSlice.user)
  const error: IError | null = useSelector(
    (state: RootState) => state.usersSlice.error
  )
  const isFetching: boolean = useSelector(
    (state: RootState) => state.usersSlice.isFetching
  )

  useEffect(() => {
    dispatch(getUser(null))
  }, [error, dispatch])

  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName("")
    dispatch(toggleIsFetching(true))
    dispatch({ type: "FETCH_USER", payload: { name } })
  }

  const isUser = user ? (
    <UserPreviev user={user} />
  ) : (
    <h2>{error ? error.response.data.message : "Let's find someone!"}</h2>
  )

  return (
    <div className="home">
      <div className="home__preview">{isFetching ? <Preloader /> : isUser}</div>
      <form className="home__form" onSubmit={onSubmit}>
        <input
          className="home__input"
          type="text"
          value={name}
          placeholder="Enter the name"
          onChange={getName}
        />
        <button className="home__button">Find</button>
      </form>
    </div>
  )
}
