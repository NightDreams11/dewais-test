import { FC } from "react"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import "./Layout.scss"

export const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
