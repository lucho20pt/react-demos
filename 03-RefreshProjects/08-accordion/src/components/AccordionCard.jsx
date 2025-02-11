import { useState } from 'react'

const AccordionCard = ({ id, title, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className="flex flex-col" id={id}>
      <header
        onClick={() => handleToggle()}
        className="w-full flex flex-row items-center justify-between bg-indigo-500 p-5 text-2xl cursor-pointer"
      >
        <h3 className="text-xl">{title}</h3>
        <span>{!isOpen ? '+' : '-'}</span>
      </header>
      <div className={`${!isOpen ? 'hidden' : ''} p-5 text-xl`}>
        {description}
      </div>
    </article>
  )
}

export default AccordionCard
