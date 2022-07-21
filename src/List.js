import React, { Component } from 'react';
// import Item from './item';
import Child from './Child'

class List extends Component {

    render(){
        // const itemList = this.props.todos.map(item => {
        //     return <Item key={item.id} id={item.id} title={item.title} />
        // })

        return(
            <div>
                {/* {itemList} */}
                <Child />
            </div>
        )
    }

    
}

export default List