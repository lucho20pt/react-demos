import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    }
    fetchData()
  }, [posts])

  return (
    <section>
      <h3>Title:</h3>
      {posts.length > 0 ? <p>{posts[0].title}</p> : <p>no posts</p>}
    </section>
  )
}

export default FetchDataEffect
