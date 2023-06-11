import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignUp from '../../Pages/SignUp/SignUp';
import DashboardLayout from '../../Layout/DashboardLayout';
import MyAppointment from '../../Pages/DashBoard/MyAppointment/MyAppointment';
import AdminRoute from '../AdminRoute/AdminRoute';
import AllUsers from '../../Pages/DashBoard/AllUsers/AllUsers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
])
export default router;