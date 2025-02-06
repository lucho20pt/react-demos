import React from 'react'
import useGetMeals from '../hooks/useGetMeals'

const Meals = () => {
  const name = '<Meals />'
  const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

  const data = useGetMeals(API)

  return (
    <section className="flex flex-col items-center justify-center gap-10 p-10">
      <h1 className="text-4xl">{name}</h1>
      <ul className="max-w-6xl flex flex-row items-stretch justify-center flex-wrap gap-15">
        {data &&
          data.map(({ idMeal, strMeal, strMealThumb }) => (
            <li
              key={idMeal}
              className="flex flex-col items-center sm:w-1/4 w-full overflow-hidden 
               rounded-2xl cursor-pointer bg-indigo-500/50
              transition duration-300 ease-out hover:scale-110 opacity-90 hover:opacity-100"
            >
              <img src={strMealThumb} alt={strMeal} className="full" />
              <hr className="border-3 w-full border-pink-400" />
              <h2 className="text-xl p-5">{strMeal}</h2>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Meals
