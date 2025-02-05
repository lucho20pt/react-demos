import { useState } from 'react'
import AddTodosForm from './AddTodosForm'

const Todos = () => {
  const title = '<Todos />'
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Buy groceries',
    'Learn React',
  ])

  // add
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  // delete
  const deleteTodo = (todo) => {
    if (confirm('Deleting: ' + todo)) {
      setTodos(todos.filter((t) => t !== todo))
    }
  }

  // edit
  const editTodo = (todo) => {
    const newTodo = prompt('Edit todo:', todo)
    if (newTodo) {
      setTodos(todos.map((t) => (t === todo ? newTodo : t)))
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <header className="p-10 text-center">
        <h2 className="text-indigo-500 text-5xl font-bold">{title}</h2>
      </header>
      <main className="flex flex-col items-center gap-10">
        <AddTodosForm addTodo={addTodo} />

        <ul id="list" className="w-md flex flex-col gap-2">
          {todos.map((todo) => (
            <li key={Math.random()} className="text-white">
              <div className="p-2 flex flex-row items-center justify-around gap-2 hover:bg-amber-900">
                <h3 className="w-3/4 text-2xl">{todo}</h3>
                <div className="w-1/4 flex flex-row items-center justify-around">
                  <button
                    // onClick={deleteTodo.bind(null, todo)}
                    onClick={() => deleteTodo(todo)}
                    className="h-10 w-10 bg-red-700/80 rounded-full cursor-pointer"
                  >
                    X
                  </button>
                  <button
                    onClick={() => editTodo(todo)}
                    className="h-10 w-10 bg-green-700/80 rounded-full cursor-pointer"
                  >
                    ✎
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Todos
