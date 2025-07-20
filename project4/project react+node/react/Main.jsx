import {Nav} from './nav'
import { Routing } from './Routing';
import {SearchBar} from './search';
import { BrowserRouter } from "react-router-dom";
import {Add} from "./Add&&Update";
export const Main = () => {
  return <>
    
  
 <BrowserRouter>
     <Nav></Nav>
     <SearchBar></SearchBar>
     <Routing></Routing>
     {/* <Add></Add> */}
     </BrowserRouter>
   </>
  
}

