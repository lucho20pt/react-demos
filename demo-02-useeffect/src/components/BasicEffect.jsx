import React, { useEffect } from 'react'

const BasicEffect = () => {
  const message = 'Basic Componet Mounted'

  useEffect(() => {
    console.log(message)
  }, [])

  return (
    <section>
      <h2>{message}</h2>
    </section>
  )
}

export default BasicEffect
