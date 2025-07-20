import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"
import { Car } from "./Car"
import { Register } from "./Rsgister"
export const Routing = () => {
    // הצהרות על ניתובים
    return <>
        <Routes>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="car" element={<Car></Car>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
        </Routes>
    </>
}