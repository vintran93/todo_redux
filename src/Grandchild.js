import React, { Component } from 'react'
import Item from './Item';
import { connect } from 'react-redux'

class Grandchild extends Component {
  render() {

    const itemList = this.props.todos.map(item => {
      return <Item key={item.id} id={item.id} title={item.title} />
    })

    return (
      <div>
        {itemList}
      </div>
    )
  }
}

const mapGlobalStateToPropsForOnlyThisComponent = state => {
    return {
      todos: state
    }
}

export default connect(mapGlobalStateToPropsForOnlyThisComponent)(Grandchild);


// connected; connecter function is grabbing what it needs its wrapped in the provider and in grandchild it knows props
// we told parent to wrap everything in provider and any component I want to connect I can connect
// what bits and pieces do I want and define what it will look like in props for this component
// connect those 2 things together and then I have access