import { createStore } from 'redux';

const todos = [
    {id: 1, title: 'Buy groceries', completed: true},
    {id: 2, title: 'Clean the house', completed: false},
    {id: 3, title: 'Walk Amy', completed: false},
    {id: 4, title: 'Wash the dishes', completed: false},
    {id: 5, title: 'Do the laundry', completed: false},
    {id: 6, title: 'Sweep the floor', completed: false},
    {id: 7, title: 'Vacumm the carpet', completed: false},
    {id: 8, title: 'Study coding', completed: false}

]

// action is an object and has a type and payload
// depending on the type will do different things
// in this case I want you to add a todo, or remove a todo
// reducer takes in the state, takes in the action, and returns new state depending on what the given action was

// Given Redux, create reducer, depending on action type will do something to state
// it takes in both state and action object, object just has type and payload
// depending on type, returns new state (frontend state)

// not database, not backend at all; async
// make sure frontend global state always represents real truth which is coming from the backend
function todosReducer(state = todos, action){
    switch(action.type){
        case 'COMPLETE_TODO':
            // Go through each one saying todo, when I come to one that is the right one, then if id of todo in state
            // is equal to action.payload, if it's that one then I want to return all other information in that todo except change complete to true,
            // otherwise return it as it was
            // so now we end up with new state being the array with just one change and we can return new state
            // eslint-disable-next-line
            const newState = state.map(todo => todo.id == action.payload ? {...todo, completed: !todo.completed} : todo)
            return newState
        default:
            return state
    }
} 

let store = createStore(
    todosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// this creates the store
// the long string is what allows to us look at Redux dev tools in browser

export default store