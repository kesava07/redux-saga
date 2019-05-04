import React, { Component } from 'react'
import LifeCycles1 from './LifeCycles1';
import Header from './Header';

export default class LifeCycles extends Component {
    state = {
        user: {
            name: "chenna kesava",
            id: 1,
            age: 23
        },
        isUpdated: false
    };
    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({ isUpdated: true })
    //     }, 2000)
    // };
    // shouldComponentUpdate(nextprops, nextState) {
    //     // console.log(nextState.isUpdated, this.state.isUpdated);
    //     if (this.state.user.id === nextState.user.id || this.state.user.age === nextState.user.age) {
    //         return false;
    //     }
    // }
    render() {
        console.log("render A")
        return (
            <React.Fragment>
                <Header />
                <LifeCycles1 data={this.state.user} />
                <button onClick={this.handleUpdate}>Update</button>
            </React.Fragment>
        )
    }
}
