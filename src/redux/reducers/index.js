import { combineReducers } from 'redux'
import todos from './todos'
import count from './count'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  count,
  todos,
  visibilityFilter
})

export default todoApp