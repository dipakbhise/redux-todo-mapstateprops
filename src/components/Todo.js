import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteTodo, markTodo } from '../actions'


const Todo = ({ onClick, completed, text, id, deleted, marked, status }) => (

  

  <ListGroupItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none', background:"#E9F4F5", margin:"5px 0", borderRadius:"5px 10px", border:"1px #E9F4F5", fontFamily:"cursive"
    
    }}
  >


<input type="checkbox" style={{
      marginRight:"10px",
      cursor:"pointer",
      
    }} onClick={()=> marked(!status, id)}></input> 
    
  
    <span>{text}</span>
   

<Button style={{
    //  position:"relative", left:"100px"
    marginLeft:"1000px",
      
    
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

  deleted: (id) => dispatch(deleteTodo(id)),
  marked : (status, id) => dispatch(markTodo(status, id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)



// export default Todo
