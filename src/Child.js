import React, { Component } from 'react'
import Grandchild from './Grandchild'
import { connect } from 'react-redux';

class Child extends Component {
  render() {
    return (
      <div>
        <p>First Task{this.props.firstTask.title}</p>
        <br/>
        <Grandchild />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    firstTask: state[0]
  }
}
export default connect(mapStateToProps)(Child);