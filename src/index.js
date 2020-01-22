import ReactDom from "react-dom"
import * as React from "react"
import {BrowserRouter, HashRouter} from "react-router-dom"
import {Provider} from "react-redux";
import App from "./router"
import store from "./redux/store"
ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>
    ),
    document.getElementById("app")
);