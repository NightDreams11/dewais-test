import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import "./User.scss"

export const User: FC = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.usersSlice.user)

  useEffect(() => {
    if (!user) {
      navigate("/home")
    }
  }, [user, navigate])

  return (
    <div className="user">
      <img className="user__img" src={user?.avatar_url} alt="User" />
      <div className="user__info">
        <h3 className="user__name">Name: {user?.login}</h3>
        <h3 className="user__bio">Bio: {user?.bio || "No status"}</h3>
        <h3 className="user__link">
          <a href={user?.html_url} target="_blank" rel="noreferrer">
            Git: {user?.html_url}
          </a>
        </h3>
      </div>
    </div>
  )
}
