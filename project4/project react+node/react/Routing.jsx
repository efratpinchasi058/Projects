import { Route, Routes } from "react-router";
import { Home } from "./Home";
import { MyCom } from "./MyCom";
import {Filter} from "./Filter";
import { Details } from "./Details";
import {Delete} from "./Delete";
import {Add} from "./Add&&Update";
export const Routing = () => {
    return <>
        <Routes>
            {/* <Route path="card" element={<Home></Home>}></Route> */}
           <Route path="" element={<Home></Home>}></Route>
           <Route path="/category" element={<MyCom></MyCom>}></Route>
           <Route path="/search" element={<Filter></Filter>}></Route>
           <Route path="/details" element={<Details />} />
           <Route path="delete" element={<Delete />} />
           <Route path="/Add" element={<Add />} />

            </Routes>
            </>
            }