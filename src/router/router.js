


import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Login from "../pages/Login";
import RegistrationForm from '../pages/RegistrationForm'
import UserDetails from "../pages/UserDetails";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Login/>}></Route>
            <Route path="registrationForm" element={<RegistrationForm />}></Route>
            <Route path="userDetails" element={<UserDetails />}></Route>

        </Route>
    )
)