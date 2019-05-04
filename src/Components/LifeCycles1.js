import React, { Component } from 'react'

export default class LifeCycles1 extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const { data } = this.props;
        if (data.id === nextProps.data.id) {
            return false
        }
    }
    render() {
        const { data } = this.props;
        console.log("render b")
        return (
            <React.Fragment>
                {data.name}
            </React.Fragment>
        )
    }
}
