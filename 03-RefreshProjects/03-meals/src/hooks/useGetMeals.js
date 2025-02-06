import axios from 'axios'
import { useState, useEffect } from 'react'

const useGetMeals = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data.meals))
      .catch((err) => console.log('get data: ', err))
  }, [url])

  return data
}

export default useGetMeals
