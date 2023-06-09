import React from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { ROUTES } from "../../../configs/routes"
import { ACCESS_TOKEN_KEY } from "../../../utils/constants"

interface Props extends RouteProps {}

const ProtectedRoute = (props: Props) => {
  const { ...rest } = props
  const auth = localStorage.getItem(ACCESS_TOKEN_KEY)

  if (auth) {
    return <Route {...rest} />
  }

  return (
    <Redirect
      to={{
        pathname: ROUTES.login,
      }}
    />
  )
}

export default ProtectedRoute
