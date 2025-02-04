import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTodo.trim()) {
      setTodos([...todos, newTodo])
      setNewTodo('')
    }
  }

  const handleAddTodo = (event) => {
    const newTodo = event.target.value
    setNewTodo(newTodo)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleAddTodo}
          value={newTodo}
          placeholder="Enter Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <h1>Todos List</h1>
      {todos && (
        <ul>
          {todos.map((item) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
      )}
      {todos.length === 0 && <p>No todos list</p>}
    </section>
  )
}

export default TodoList
