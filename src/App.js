import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './ReduxStore/Actions/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SAGA</h1>
        <button onClick={this.props.getApiData} disabled={this.props.data.length > 0}>GET DATA</button>
        {this.props.loading ? <h1>Loading...</h1> : null}
        {
          this.props.data && this.props.data.map(val => (
            <React.Fragment key={val.id}>
              <h3>{val.name}</h3>
            </React.Fragment>
          ))
        }
      </div>
    );
  }
};

const mapDispacthToProps = state => ({
  data: state.data,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  getApiData: () => dispatch(actions.getData())
});

export default connect(mapDispacthToProps, mapDispatchToProps)(App);
