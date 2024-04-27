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
            {path:'/',element:<Home></Home>, loader:()=>fetch('http://localhost:5000/craft')},

            {path:'/allitem',
            element:<AllACItem></AllACItem>, 
            loader:()=>fetch('http://localhost:5000/craft')},

            {path:'/card/:id', element:<PrivateRoute><DetailCard></DetailCard></PrivateRoute>, loader:({params})=>fetch(`http://localhost:5000/craft/${params._id}`)},
            {path:'/addcard',element:<PrivateRoute><AddCard></AddCard></PrivateRoute>},
            {path:'/mylist',element:<PrivateRoute><MyACList></MyACList></PrivateRoute>},
            {path:'/login',element:<Login></Login>},
            {path:'/signup',element:<SignUp></SignUp>},
        ]
    }
])