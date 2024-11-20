import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import TodoProvider from './context/TodoContext'

function App() {

  return (
    <div className='app'>
      <TodoProvider>
        <AddTodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  )
}

export default App
