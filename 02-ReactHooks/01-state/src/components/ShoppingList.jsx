import { useState } from 'react'

const ShoppingList = () => {
  const [items, setItems] = useState([])
  const [inputName, setInputName] = useState('')

  const handleItemSubmit = (event) => {
    event.preventDefault()

    // Prevent adding empty item
    if (inputName.trim() === '') return;

    setItems((prevItems) => {
      // Check if item already exists
      const existingItem = prevItems.find(
        (item) => item.name.toLowerCase() === inputName.toLowerCase()
      )

      // If item exists, update its quantity
      if (existingItem) {
        return prevItems.map((item) =>
          item.name.toLowerCase() === inputName.toLowerCase()
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      // else item doesn't exist, add it
      return [...prevItems, { name: inputName, quantity: 1 }]
    })

    setInputName('') // Clear the input field
  }

  return (
    <section>
      <h1>Shopping List</h1>
      {items.length !== 0 ? (
        <ul>
          {items.map(({ name, quantity }) => (
            <li key={name}>
              {name} - {quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the shopping list</p>
      )}
      <form onSubmit={handleItemSubmit}>
        <div className="row">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter item name"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
        </div>
        <div className="row">
          <button type="submit">Add Item</button>
        </div>
      </form>
    </section>
  )
}

export default ShoppingList
