import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteTodo, markTodo } from '../actions'


const Todo = ({ onClick, completed, text, id, deleted, marked, status }) => (

  <ListGroupItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    
    }}
  >

  
    {text}
    <Button style={{
      margin:"0px 10px 0px 500px",
      
    }} onClick={()=> console.log(status)}>Mark as Completed</Button>

<Button style={{
      margin:"0 0 0 10px"
    }} onClick={()=>deleted(id)}>Delete</Button>


    
    
  </ListGroupItem>

  
  
)


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({

  deleted: (id) => dispatch(deleteTodo(id))
  // marked : (status) => dispatch(markTodo(status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)



// export default Todo
