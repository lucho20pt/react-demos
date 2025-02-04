import { useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.error(err))
  return data
}

export default useFetch
