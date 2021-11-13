let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = () => ({
  type: 'TOGGLE_TODO',
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
})

export const markTodo = (status, id) => ({
  type: 'MARK_TODO',
  status,
  id
})
