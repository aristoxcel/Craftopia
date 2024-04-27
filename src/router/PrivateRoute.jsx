import { useContext } from "react"
import { AuthContext } from "../Context"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from "prop-types"


function PrivateRoute({children}) {
    const {user, loading}= useContext(AuthContext)
    const loc = useLocation();
    if (loading) {
        // return <div className="mx-auto text-center my-32">
        //     <span className="origin-center rotate-90 loading loading-infinity loading-lg border-[100px] border-[#2596BE] "></span>
        // </div>
    }

    if (user) {
        return children
    }
  return <Navigate state={loc.pathname} to={'/login'}></Navigate>
}

export default PrivateRoute

PrivateRoute.propTypes={
    children:PropTypes.node
}