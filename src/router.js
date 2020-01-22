import {Switch, Route} from "react-router"
import * as React from "react"
import Home from "./page/home"
import About from "./page/about"
export default class App extends React.Component {
    render() {
        return <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/" component={Home}></Route>
        </Switch>
    }
}