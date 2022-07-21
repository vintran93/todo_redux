import React from 'react'
import { connect } from 'react-redux';

const Navbar = (props) => {
  return (
    <ul>
        <li>Todos # - {props.todosNum}</li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    todosNum: state.length
  }
}

export default connect(mapStateToProps)(Navbar);