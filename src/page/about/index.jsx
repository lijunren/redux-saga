import * as React from "react"
import { connect } from "react-redux"
class About extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return <div>
            About
        </div>
    }
}

export default connect((state) => {
    return {nums: state.actionNum}
})(About);