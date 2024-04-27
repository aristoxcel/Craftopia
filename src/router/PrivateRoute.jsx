import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import { AuthContext } from "../context/Context";


function PrivateRoute({children}) {
    const {user, loading}= useContext(AuthContext)
    const loc = useLocation();
    if (loading) {
       
       return <div className="w-56 h-56 mx-auto text-center"><div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full"><span className="h-20 w-20 rounded-tl-full bg-red-500 animate-[ping_1.4s_linear_infinite]"></span> <span className="h-20 w-20 rounded-tr-full bg-teal-500 animate-[ping_1.8s_linear_infinite]"></span><span className="h-20 w-20 rounded-bl-full bg-orange-500 animate-[ping_2.2s_linear_infinite]"></span><span className="h-20 w-20 rounded-br-full bg-sky-500 animate-[ping_2.6s_linear_infinite]"></span></div></div>
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