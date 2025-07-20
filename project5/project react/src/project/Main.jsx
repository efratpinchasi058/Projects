import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { Nav} from "./nav"
import { Routing } from "./routing"
import store from "./Stor"

export const Main = () => {

    return <>
     <Provider store={store}> 
        <BrowserRouter>
            <Nav></Nav>
            <Routing></Routing>
        </BrowserRouter>
        </Provider>
    </>
}