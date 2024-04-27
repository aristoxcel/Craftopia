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
       return <div className="w-10 h-10"><div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full"><span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span> <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span><span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span><span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span></div></div>
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