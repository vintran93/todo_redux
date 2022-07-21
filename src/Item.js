import React, { Component } from 'react'

export default class Item extends Component {
  
  complete = (e) => {
    // debugger;
    // after checking a box, want to check if hit an action
    console.log(e.target)
    this.props.dispatch({
      type: 'COMPLETE_TODO',
      payload: e.target.id
    })
    // have to hand an action object
    // action object: when changing state, 
    // calling dispatch and handing it an action object
    // that action object has a type and a payload
    // going forward we will have an action file that has a whole bunch of action object creator functions
    // all actions are in action.js file
    // little functions that return objects so we do not have to type them in components
    // returns a type

    // normally would have mapDispatchToProps
    // have action object creator function that uses the action object creator function to return that exact object
  }
  
  render() {
    return (
      <div>
        {this.props.title}
        <input type='checkbox' id={this.props.id } onChange={this.complete}/>
      </div>
    )
  }
}
