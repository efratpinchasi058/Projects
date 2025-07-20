import { Route, Routes } from "react-router-dom"
import {Homepage} from './homePage'
import {Login} from './login'
import { Register } from './Register'
import { Cars } from './cars'
import { Pay } from './Pay'
import { Manager } from './Manager'
import {Cardetails} from './CarDetails'


export const Routing = () => {
    return <>
     
        <Routes>
            <Route path="HomePage" element={<Homepage></Homepage>}></Route>
            <Route path="Login" element={<Login></Login>}></Route>
            <Route path="Register" element={<Register></Register>}></Route>
            <Route path="Cars" element={<Cars></Cars>}></Route>       
            {/* <Route path="Cardetails" element={<Cardetails></Cardetails>}></Route>  */}
            <Route path="Cars/Cardetails/:it" element={<Cardetails></Cardetails>}></Route>
            <Route path="Pay" element={<Pay></Pay>}></Route>
            <Route path="Manager" element={<Manager></Manager>}></Route>
            <Route path="" element={<Homepage></Homepage>}></Route>
            
        </Routes>
    </>
}