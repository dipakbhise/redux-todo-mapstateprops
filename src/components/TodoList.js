import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import Todo from './Todo';
// import { connect } from 'react-redux'

const TodoList = ({ todos, toggleTodo }) => (
  <ListGroup style={{ marginTop: 10, marginBottom: 10 }}>
  {/* {console.log(todos)} */}
  
    {todos.map(todo =>
    
      <Todo
      id={todo.id}
      todos={todo}
      status = {todo.completed}
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
 
      />
    
    
    
    )}

  </ListGroup>
  

  
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func
}





export default TodoList


