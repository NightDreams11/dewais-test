import { FC } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { UserPage } from "../../../pages/UserPage/UserPage"
import { HomePage } from "../../../pages/HomePage/HomePage"

export const RoutesComp: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="user/:id" element={<UserPage />} />
          <Route path="*" element={<Navigate to={"home"} />} />
        </Route>
      </Routes>
    </>
  )
}
