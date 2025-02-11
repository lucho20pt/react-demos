
import AccordionCard from './AccordionCard'

const Accordion = () => {
  const dataAccordion = [
    {
      id: 1,
      title: 'Lorem, ipsum dolor?',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, repudiandae!',
    },
    {
      id: 2,
      title: 'Lorem, ipsum dolor. Lord Dolar?',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit!',
    },
    {
      id: 3,
      title: 'Lorem! Lord Dolar?',
      description: 'Lorem ipsum dolor, sit amet elit!',
    },
  ]

  return (
    <section className="max-w-4xl mx-auto p-4 flex flex-col gap-10">
      {dataAccordion.map(({ title, description, id }) => (
        <AccordionCard key={id} title={title} description={description} />
      ))}
    </section>
  )
}

export default Accordion
