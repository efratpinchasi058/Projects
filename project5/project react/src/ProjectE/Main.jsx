import { Provider } from "react-redux"
import store from "./Store"[]
import { BrowserRouter } from "react-router-dom"
import { Nav } from "./Nav"
import { Routing } from "./Routing"

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