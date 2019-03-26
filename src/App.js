import React from 'react'
import Footer from './components/Footer'
import AddTodo from './redux/containers/AddTodo'
import VisibleTodoList from './redux/containers/VisibleTodoList'
import Count from "./components/count"
import NumberVisible from "./redux/containers/numberVisible"
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <NumberVisible></NumberVisible>
    <Count></Count>
  </div>
)
export default App