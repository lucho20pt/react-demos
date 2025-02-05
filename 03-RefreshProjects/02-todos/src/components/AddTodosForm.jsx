import { useState } from 'react'

const AddTodosForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTodo.trim() !== '') {
      addTodo(newTodo)
      setNewTodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-md flex flex-row items-center">
      <input
        onChange={(event) => setNewTodo(event.target.value)}
        value={newTodo}
        className="px-5 w-3/4 h-14 border-indigo-600 bg-indigo-400 text-white text-lg rounded-l-lg placeholder:text-gray-200 placeholder:text-lg"
        type="text"
        name="name"
        id="name"
        placeholder="Add new todo..."
      />
      <button
        type="submit"
        className="w-1/4 h-14 bg-indigo-600 text-white text-lg rounded-r-lg cursor-pointer"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodosForm
