import React, { Component } from 'react'
import Item from './Item';
import { connect } from 'react-redux'

class CompleteTodos extends Component {
  render() {

    const itemList = this.props.todos.map(item => {
      return <Item key={item.id} id={item.id} title={item.title} dispatch={this.props.dispatch} />
    })

    return (
      <div>
        <h3>{this.props.title}</h3>
        {itemList}
      </div>
    )
  }
}

const mapGlobalStateToPropsForOnlyThisComponent = state => {
    return {
      todos: state.filter(todo => todo.completed),
      title: 'Complete Todos'
    }
}

export default connect(mapGlobalStateToPropsForOnlyThisComponent)(CompleteTodos);