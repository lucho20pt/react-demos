import { useFetch } from './hooks'

const App = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
