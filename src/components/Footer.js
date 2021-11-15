import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span style= {{background:"#0D86E8", padding:"10px 10px", borderRadius:"5px 10px", color:"white", fontFamily:"cursive"}}>Filters : </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL} >
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
