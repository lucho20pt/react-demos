import { useState } from 'react'

const Testamonials = () => {
  const dataTestamonials = [
    {
      id: 1,
      name: 'John Doe',
      title: 'CEO',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Doe',
      title: 'CTO',
      text: 'Lorem ipsum dolor sit amet, adipiscing elit.',
    },
    {
      id: 3,
      name: 'Patrick',
      title: 'Developer',
      text: 'Lorem ipsum, consectetur adipiscing elit.',
    },
  ]

  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    if (index !== 0) setIndex(index - 1)
  }
  const handleNext = () => {
    if (index !== dataTestamonials.length - 1) setIndex(index + 1)
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <article className="relative w-full h-40">
        {dataTestamonials.map((el, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col gap-4 text-center min-h-25 transition-opacity duration-500 ease-in-out ${
              index === i ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-2xl">
              <i>{el.text}</i>
            </h1>
            <p className="font-bold">
              {el.name} - {el.title}
            </p>
          </div>
        ))}
      </article>

      <footer className="w-full py-5 flex flex-row items-center justify-around">
        <button
          onClick={handlePrev}
          className={`${index === 0 ? 'opacity-70' : ''}
            px-4 py-2 bg-indigo-400 hover:opacity-70 rounded-2xl cursor-pointer`}
          disabled={index === 0}
        >
          Prev
        </button>
        <span>
          {index + 1} of {dataTestamonials.length}
        </span>
        <button
          onClick={handleNext}
          className={`${
            index === dataTestamonials.length - 1 ? 'opacity-70' : ''
          }
            px-4 py-2 bg-indigo-400 hover:opacity-70 rounded-2xl cursor-pointer`}
          disabled={index === dataTestamonials.length - 1}
        >
          Next
        </button>
      </footer>
    </section>
  )
}

export default Testamonials
