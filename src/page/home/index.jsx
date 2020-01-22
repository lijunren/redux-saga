import * as React from "react"
import {connect} from "react-redux"
import {addNum, addAsyncNum, reduceNum} from "./action"

class Index extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log(this.props);
    }
    addNum() {
        this.props.dispatch(addNum());
        // this.props.addNum()
        // console.log(this.props.num)
    }
    addAsyncNum() {
        this.props.dispatch(addAsyncNum())
    }
    reduceNum() {
        this.props.dispatch(reduceNum());
        // this.props.reduceNum()
        // console.log(this.props.num)
    }
    render() {
        // console.log(this.props.num);
        return <div>
            Index
            <br/>
            <button onClick={this.addAsyncNum.bind(this)}>add after 1 second</button>
            <button onClick={this.addNum.bind(this)}>+</button>
            <span>{this.props.num}</span>
            <button onClick={this.reduceNum.bind(this)}>-</button>
        </div>
    }
}

export default connect(
    state => ({
        num: state.actionNum
    })
)(Index);