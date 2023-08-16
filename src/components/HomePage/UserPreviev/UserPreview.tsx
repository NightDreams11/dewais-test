import { FC } from "react"
import { NavLink } from "react-router-dom"
import { IUser } from "../../../types"
import "./UserPreview.scss"

interface IProps {
  user: IUser
}

export const UserPreviev: FC<IProps> = ({ user }) => {
  return (
    <NavLink className="user-preview" to={`/user/${user.id}`}>
      <img className="user-preview__img" src={user.avatar_url} alt="User" />
      <h3>Name: {user.login}</h3>
    </NavLink>
  )
}
