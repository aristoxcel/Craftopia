import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import AllACItem from "../page/AllACItem";
import DetailCard from "../page/DetailCard";
import AddCard from "../page/AddCard";
import MyACList from "../page/MyACList";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../page/ErrorPage";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {path:'/',element:<Home></Home>, loader:()=>fetch('https://craftopia-server-psi.vercel.app/craft')},

            {path:'/allitem',
            element:<AllACItem></AllACItem>, 
            loader:()=>fetch('https://craftopia-server-psi.vercel.app/craft')},

            {path:'/craft/:id',
             element:<PrivateRoute><DetailCard></DetailCard></PrivateRoute>,
            loader:({params})=>fetch(`https://craftopia-server-psi.vercel.app/craft/${params.id}`)},
            {path:'/allitem/craft/:id',
             element:<PrivateRoute><DetailCard></DetailCard></PrivateRoute>,
            loader:({params})=>fetch(`https://craftopia-server-psi.vercel.app/allitem/craft/${params.id}`)},
            {path:'/addcard',element:<PrivateRoute><AddCard></AddCard></PrivateRoute>},
            {path:'/mylist',element:<PrivateRoute><MyACList></MyACList></PrivateRoute>, loader:()=>fetch('https://craftopia-server-psi.vercel.app/craft')},
            {path:'/login',element:<Login></Login>},
            {path:'/signup',element:<SignUp></SignUp>},
        ]
    }
])